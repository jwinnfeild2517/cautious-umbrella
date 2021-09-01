import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render,fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import BreweryHomePage from '../pages/index';
import breweries from '../config/breweries';
import theme from '../config/theme';

afterEach( () => {
  console.error.mockClear();
  console.warn.mockClear(); // if a mock function has been called, clear it for the next test
})

console.error = jest.fn();
console.warn = jest.fn()

test('<BreweryHomepage/>', async () => {

  const {getByTestId, getByLabelText, getByText} = render(
      <ThemeProvider theme={theme}>
        <BreweryHomePage data={breweries}
        />
      </ThemeProvider>
    )

  const input = getByLabelText("Search breweries")

  expect(getByText('Home').tagName).toBe('A')
  expect(getByText('Brewery Finder').tagName).toBe('H1')
  expect(getByTestId('nav-search-form')).toHaveAttribute('action', '/search')

  fireEvent.change(input, {target: {value: 'Daves Brew Farm'}})
  expect(input.value).toBe('Daves Brew Farm')

  fireEvent.change(input, {target: {value: ''}})
  expect(input.value).toBe('')
  expect(getByText('Search')).toBeTruthy()

  expect(getByTestId('brewery-list')).toBeTruthy()
  expect(getByText('Get Your Beer On').tagName).toBe('P')
})

