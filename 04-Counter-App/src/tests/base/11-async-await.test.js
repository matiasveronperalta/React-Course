import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';


describe('Test async away', () => {

    test('should be return image url', async () => {

        const url = await getImagen();
        expect(typeof url).toBe('string');
    })
    
})
