import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import BreweryHeroItem from '../components/BreweryHeroItem/index';
import breweries from '../config/breweries';
import theme from '../config/theme';

const brewery = breweries[0]

test('<BreweryHeroItem/>', async () => {
  const {getByText} = render(
    <ThemeProvider theme={theme}>
      <BreweryHeroItem brewery={brewery}
      />
    </ThemeProvider>
  )

  expect(getByText('Featured Brewery').tagName).toBe('H2')
  expect(getByText(`${brewery.name}`)).toBeTruthy()
  expect(getByText(`${brewery.brewery_type}`)).toBeTruthy()
  expect(getByText(`${[brewery.city, brewery.state].join(', ')}`)).toBeTruthy()
  expect(getByText(`${brewery.phone}`)).toBeTruthy()
  expect(getByText('Brewery Website').tagName).toBe('A')
  expect(getByText('Brewery Website').getAttribute('href')).toBe(`${brewery.website_url}`)
})
