
describe("pruebas en <DemoComponent />", () =>{
// le pone subtitulos en las pruebas el desscribe

    test("Esta prueba no es valida", () => {

        // 1. Inicializacion 
        const mensaje1 = "hola mundo";
    
        // 2. Estimulo 
        const mensaje2 = mensaje1.trim();
    
        // 3. Observamos el comportamiento esperado 
        expect( mensaje1 ).toBe( mensaje2 );
    
});

})