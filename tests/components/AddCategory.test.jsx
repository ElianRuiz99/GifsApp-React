import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en el componente de <AddCategory />', () => { 


    test('Debe de cambiar el valor de la caja de texto', () => { 

        render( <AddCategory onNewCategory={ () =>{} } /> );
        const input = screen.getByRole('textbox');

        //disparar un evento
        fireEvent.input( input, { target: { value: 'Adventure Time'} } );

        expect( input.value ).toBe( 'Adventure Time' );

        screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Adventure Time';
        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue} } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();

        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    test('No debe de llamar al onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
    });

});