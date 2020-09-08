import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('test 08-imp-exp.test.js', () => {

    test('should be return a heroe by id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id == id);

        expect(heroe).toEqual(heroeData);
    });


    test('should be return undefine where hereo no exist', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual(undefined);
    });


    test('should be return heroes by dc owners', () => {

        const owner = 'DC';
        const heroesByOwner = getHeroesByOwner(owner);

        const heroes = [
            {id: 1, name: 'Batman', owner: 'DC'},
            {id: 3, name: 'Superman', owner: 'DC' },
            {id: 4, name: 'Flash', owner: 'DC' }
        ];

        expect(heroesByOwner).toEqual(heroes);
    });


    test('should be getHeroesByOwner return 2 heroes', () => {

        const owner = 'Marvel';
        const heroesByOwner = getHeroesByOwner(owner);

        expect(heroesByOwner.length).toBe(2);
    });
})
