import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";



describe('Pruebas en el hook useFetchGifs.js', () => { 

    test('Debe de regresar el valor inicial, los valores iniciales de los estados', () => { 
        
        const { result } = renderHook( () => useFetchGifs('Adventure Time') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy();
    });

    test('Debe de retornar un arreglo de imagenes y el isLoading en false', async() => { 

        const { result } = renderHook( () => useFetchGifs('Adventure Time') );

        //esperar a que el hook haga su funcion
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan( 0 ),
            {
                timeout: 3000
            }
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy();
    });

});