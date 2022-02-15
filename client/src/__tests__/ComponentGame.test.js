import React from 'react'
import "@testing-library/jest-dom"
import { render } from '@testing-library/react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom'

import Game from "../components/Game"

describe('Test for <Game/> component', () => {
    let component
    beforeEach(() => {
        component = render(
            <BrowserRouter>
            
                <Game />
           
            </BrowserRouter>
        )
    })

    test('render <Game /> component', () => {
        expect(component.container).toBeInTheDocument()
    });
    test('renders name content', () => {
        expect(component.container.querySelector('.nombre')).toBeDefined()
    })
    test('renders an image', () => {
        expect(component.container.querySelector('.ima')).toBeDefined()
    })

    test('should have a "Géneros :" title', () => {
        const { getByTestId } = component
        expect(getByTestId('genero')).toHaveTextContent('Géneros :')
    });

    test('renders rating content', () => {
        expect(component.container.querySelector('.rating')).toBeDefined()
    })
});
