import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../Hooks/useFetchGifs';


describe('Test custom hook useFetchGifs', () => {

    test('should be return initial state', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One punch'));
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    })

    test('should be return images and loading should be true', async () => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One punch'));
        await waitForNextUpdate();


        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();
    });
});
