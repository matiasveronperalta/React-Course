import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Test 05-funtions.js', () => {
    
    test('should be getUser return an object', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        
        expect(user).toEqual(userTest);

    })
    
    test('should be getUsuarioActivo return an object', () => {
        
        const name = 'El_Papi1502'
        const user = getUsuarioActivo(name);
        
        expect(user).toEqual({
            uid: 'ABC567',
            username: 'El_Papi1502'
        });

    })
    
})
