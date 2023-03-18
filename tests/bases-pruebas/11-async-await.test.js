import { string } from "prop-types";
import { getImagen } from "../../src/base-pruebas/base-pruebas/11-async-await";

describe('Pruebas en el archivo 02 string', () => { 
    
    test("Getimagen debe returnar la url de la imagen, sino que aparesca un error por la api key", async() => {
        
        const resp = await getImagen();
        // console.log(url)
        // expect( typeof url ).toBe("string");
        expect( resp ).toEqual("no se encontro la imagen");
    });
})
