import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';


describe('test <PrimeraApp/>', () => {

    test('should be show Hola soy Goku', () => {
        
        const saludo = 'Hola soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        

        expect(wrapper).toMatchSnapshot();
    });

    test('should be show subtitle reciving from props', () => {
        
        const saludo = 'Hola soy Goku';
        const subTitle = 'Hola soy el pillin';
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo = {subTitle}
            />
        );
        
        const parrafText = wrapper.find('p').text();

        expect(parrafText).toBe(subTitle);
    })
    



    

});
