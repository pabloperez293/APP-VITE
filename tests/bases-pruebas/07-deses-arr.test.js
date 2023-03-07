import { retornaArreglo } from "../../src/base-pruebas/base-pruebas/07-deses-arr";

describe('Pruebas en 07 Array', () => { 
    
    test("Debe retornar un string y un numero", () => {
// Desestructuracion de linea 7
        const [ letters, numbers ] = retornaArreglo();
        

        expect( letters ).toBe( "ABC" )
        expect( numbers ).toBe( 123 )

        expect(typeof letters ).toBe( "string" )
        expect(typeof numbers ).toBe( "number" )
        

    });

});