import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from '../../data/heroes';

describe('test with promise', () => {
    

    test('should be getHeroeByIdAsync return an heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe =>{
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });


    test('should be getHeroeByIdAsync return an error', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
    
})
