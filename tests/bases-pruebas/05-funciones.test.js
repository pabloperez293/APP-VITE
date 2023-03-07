import { getUser, getUsuarioActivo } from "../../src/base-pruebas/base-pruebas/05-funciones"

describe('Pruebas de funciones', () => { 
    
    test("GetUSer debe de retornar un objeto", () => {

        const testUser = {
            uid: 'ABC123',
            username: 'pass'
        };

        const user = getUser();
        
        expect( testUser ).toStrictEqual( user );

    })

    test(" GetUsuario debe retornar un objeto ", () => {

        const name = "Pablo";

        const user = getUsuarioActivo( name );

        expect( user ).toStrictEqual( {
            uid: 'ABC567',
            username: name
        });
    });

 });