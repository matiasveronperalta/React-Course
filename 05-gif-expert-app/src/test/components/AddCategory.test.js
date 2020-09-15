import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Test <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('should be show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should be change textbox', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });

    })


    test('should not be post insformation on submit', () => {
        
        wrapper.find('form').simulate('submit',{preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('should be call setCategories and clean textbox', () => {
        const value = 'Hola Mundo';
        
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit',{preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    })
});

