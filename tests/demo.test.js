const { default: expect } = require("expect");

describe('Pruebas en componente <App/>', () => {
    test('Primer prueba', () => { 
        const mensaje1 = 'Hello world';

        const mensaje2 = mensaje1.trim();

        expect( mensaje1 ).toBe( mensaje2 );
    });
})