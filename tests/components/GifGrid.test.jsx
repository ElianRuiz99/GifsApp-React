import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en el componente de <GifGrid />', () => {  

    const category = 'Adventure Time';

    test('Debe de mostrar el loading', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        screen.debug()
        expect( screen.getByText('Cargando...') ).toBeTruthy();
        expect( screen.getByText( category ) ).toBeTruthy();
    });

    test('Debe de mostrar items cuando se cargan las imagenes de useFetchGifs', () => { 

        const gifs = [{
            id: 'ABZ123',
            title: 'Jake',
            url:'https://jakefeliz'
        },
        {
            id: 'ftZ980',
            title: 'morita',
            url:'https://motitaTriste'
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        //screen.debug();
        expect( screen.getAllByRole('img').length ).toBe( 2 );

    });
})