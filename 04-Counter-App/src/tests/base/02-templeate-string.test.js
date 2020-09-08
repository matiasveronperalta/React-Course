import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';


describe('test on 02-templeate-string.test.js', () => {

    test('should be return Hola fernando', () => {
        const name = 'fernando';

        const saludo = getSaludo(name);

        expect(saludo).toBe('Hola fernando');
    })


    test('should be return Hola Carlos', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos');
    })
})
