import { render, screen } from "@testing-library/react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en el componente de GifItem.jsx', () => {  

    const title = "Adventure Time"
    const url = "https://adventure/unaImagen.jpg"

    test('debe de hacer match con el snapshot', () => { 

        const {container} = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrar la imagen con el URL y el Alt correspondiente', () => { 

        render( <GifItem title={ title } url={ url } /> );
        screen.debug();

        expect( screen.getByRole('img').src ).toBe( url );
        expect( screen.getByRole('img').alt ).toBe( title );
        
    });

    test('Debe de mostrar el titulo', () => { 

        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();  

    });

})