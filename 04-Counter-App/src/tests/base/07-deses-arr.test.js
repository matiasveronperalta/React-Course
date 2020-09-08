import '@testing-library/jest-dom';
import { retornaArreglo } from "../../base/07-deses-arr";

describe(' test 07-deses-arr.test.js', () => {
    
    test('should be return number and string', () => {
        
        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        
        expect(numeros).toBe(123);
    })
    
})
