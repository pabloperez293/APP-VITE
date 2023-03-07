import { getSaludo } from "../../src/base-pruebas/base-pruebas/02-template-string";

describe('Pruebas en el archivo 02 string', () => { 
    
    test(`getSaludo  debe retornar "Hola Pablo"`, () => {

        const name = "Pablo";
        const mensaje = getSaludo( name );

        expect( mensaje ).toBe(`Hola ${ name }`)

    });

 });