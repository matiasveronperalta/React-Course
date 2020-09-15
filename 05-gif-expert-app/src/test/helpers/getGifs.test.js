import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';


describe('Test getGifs', () => {
    test('should be get ten elements', async () => {
        const gifs = await getGifs();

        expect(gifs.length).toBe(10);
    });
    

    test('should be get ten elements', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    });
    
});


