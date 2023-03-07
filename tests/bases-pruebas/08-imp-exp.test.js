import { getHeroeById } from "../../src/base-pruebas/base-pruebas/08-imp-exp";

describe(' Prueba 08-imp heroe', () => { 

    test("Llamar al herore por ID", () => {

        const id = 2;
        const hero = getHeroeById( id );
        console.log( hero );
    });
    
 });
