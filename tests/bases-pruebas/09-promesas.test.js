import { getHeroeByIdAsync } from "../../src/base-pruebas/base-pruebas/09-promesas";

describe('Pruebbas de Promesas', () => { 
    
    test("getHeroeById debe retornar un Heroe", ( done ) => {

        const id = 2;
        getHeroeByIdAsync( id )
        .then( hero => {   
            
            expect(hero).toEqual({
                id: 2, name: 'Spiderman', owner: 'Marvel'
            });

            done();
        })

    });

    test("getHeroeById debe de obtener un error si un Heroe no existe", ( done ) => {

        const id = 20;
        getHeroeByIdAsync( id )
            .then ( hero => {
                expect ( hero ).toBeFalsy();
                done();
            })
            .catch( error => {   

                // console.log( error );       
                expect( error ).toBe('No se pudo encontrar el héroe' + id)
                done();
            });
    });


});