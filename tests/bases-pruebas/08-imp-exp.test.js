import { getHeroeById ,getHeroesByOwner } from "../../src/base-pruebas/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe(' Prueba 08-imp heroe', () => { 

    test("Llamar al heroe por ID", () => {
        const id = 2;
        const hero = getHeroeById( id );

        console.log( hero );

        expect( hero ).toEqual({id: 2, name: 'Spiderman', owner: 'Marvel'},)
    });

    test("getHeroByid debe retornar un undefined si no exite heroe", () => {

        const id = 102;
        const hero = getHeroeById( id );
        expect( hero ).toBeFalsy(  );
        // esto es toBeFalsy es una manera corta de que aparesca null undefined o false   
    });

    test("getHeroesByOwner Debe de retornar un arreglo con los heores de DC", () => {

        const owner = "DC";
        const heroes = getHeroesByOwner( owner );
        // console.log( heroes ); 
        // expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }         
        ]);
    });
    // Tarea
    // Debe de retornar un arreglo con los heores de DC
    // Length === 3
    //  toEqual al arreglo filtrado
    // Length === 2
    test("getHeroesByOwner Debe de retornar un arreglo con los heores de Marvel", () => {
        const owner = "Marvel";
        const heroes = getHeroesByOwner( owner );

        console.log( heroes );

        expect( heroes.length ).toBe( 2 );
    });    
 });
