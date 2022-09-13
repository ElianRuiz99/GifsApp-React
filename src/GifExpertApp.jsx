import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Adventure time'])

    const onAddCategory = (newCategory) => {
        //Si la categoria existe se sale y no lo vuelve agregar
        if( categories.includes(newCategory) ) return;
        //Agregar nueva categoria
        setCategories( [newCategory, ...categories] );
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory={ value => onAddCategory(value)}
            />

            {/* Listado de gifs */}
            { 
                categories.map( category => ( 
                    <GifGrid key={category} category={category} /> 
                ) )                
            }
        </>
    );
}