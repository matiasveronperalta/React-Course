import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Test <CounterApp/>', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('should be match sanpshoot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be show counter on 100', () => {

        const counter = 100;
        const wrapper = shallow(<CounterApp value={counter} />);

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe(`${counter}`);
    });


    test('should be increment counter +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');
    });


    test('should be decrement counter -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');
    })

    test('should be set default value on counter where click button reset', () => {

        const wrapper = shallow(<CounterApp value={105} />);

        incrementCounterOnTwo(wrapper);
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();


        expect(counterText).toBe('105');
    });

    const incrementCounterOnTwo = (wrapper) => {
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
    }
});



