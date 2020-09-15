import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Test <GifGridItem/> ', () => {
    
    const title = 'ElTitulo';
    const url = 'https://localhost/noexiste.jpg'
    
    let wrapper = shallow(<GifGridItem title={title} url={url} />);

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={title} url={url} />);
    });

    test('should be show and match component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be contain a pagraf with title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    })

    test('should be have image/url equals to props', () => {
        
        const image = wrapper.find('img');

        expect(image.prop('src')).toBe(url);
        expect(image.prop('alt')).toBe(title);

    })


    test('should be have animate__fadeIn style on div', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    
    
    

    
})
