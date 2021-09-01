import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import BrewerySummaryItem from '../components/BrewerySummaryItem/index';
import breweries from '../config/breweries';
import theme from '../config/theme';

const brewery = breweries[6]

const {
  id,
  name,
  brewery_type: type,
  city,
  state,
  phone,
  website_url: url,
} = breweries[6]

test(' <BrewerySummaryItem/>', async () => {

  const {getByText} = render(
      <ThemeProvider theme={theme}>
        <BrewerySummaryItem brewery={brewery}
        />
      </ThemeProvider>
    )

  expect(getByText(`${name}`).tagName).toBe('A')
  expect(getByText(`${name}`).getAttribute('href')).toBe(`/brewery/${id}`)
  expect(getByText(`${type}`)).toBeTruthy()
  expect(getByText([city, state].join(', '))).toBeTruthy()
  expect(getByText(`${phone}`)).toBeTruthy()
  expect(getByText('Brewery Website').tagName).toBe('A')
  expect(getByText('Brewery Website').getAttribute('href')).toBe(`${url}`)
})

