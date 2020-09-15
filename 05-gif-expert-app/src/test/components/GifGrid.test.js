import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../Hooks/useFetchGifs';
jest.mock('../../Hooks/useFetchGifs');


describe('Test <GifGrid/>', () => {

    test('should be show correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category="Dragon Ball" />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should be show item where load image useFetchGifs', () => {

        const images = [{
            id:'ABC',
            url:'https://localhost:80',
            title: 'Nombre'
        }];

        useFetchGifs.mockReturnValue({
            data: images,
            loading: false
        });

        const wrapper = shallow(<GifGrid category="Dragon Ball" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(images.length);

    })
});


