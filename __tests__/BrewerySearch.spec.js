import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render,fireEvent, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import BrewerySearch from '../components/BrewerySearch/index';
import breweries from '../config/breweries';
import theme from '../config/theme';

afterEach( () => {
  console.error.mockClear();
  console.warn.mockClear(); // if a mock function has been called, clear it for the next test
})

console.error = jest.fn();
console.warn = jest.fn()

global.fetch = require('jest-fetch-mock')

const onSubmit = jest.fn()

test('<BrewerySearch/>', async () => {

  fetch.mockResponse(JSON.stringify(breweries))

  const {getByText, getByLabelText, getByTestId} = render(
    <ThemeProvider theme={theme}>
      <BrewerySearch onSubmit={onSubmit}/>
    </ThemeProvider>
  )

  const input = getByLabelText('Search Breweries')

  fireEvent.change(input, {target: {value: 'Daves Brew Farm'}})

  expect(input.value).toBe('Daves Brew Farm')

  fireEvent.click(getByText('Search'))

  await waitFor(() => {
    expect(getByTestId('results-heading')).toBeTruthy()
  })

  expect(getByTestId('brewery-list')).toBeTruthy()
})

