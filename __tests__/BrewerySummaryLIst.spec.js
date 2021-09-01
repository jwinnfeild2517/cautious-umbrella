import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import BrewerySummaryList from '../components/BrewerySummaryList/index';
import breweries from '../config/breweries';
import theme from '../config/theme';

test('<BrewerySummaryList />', () => {
  const {getByTestId, getAllByTestId} = render(
    <ThemeProvider theme={theme}>
      <BrewerySummaryList
        breweries={breweries}
      />
    </ThemeProvider>,
  )
  expect(getByTestId('brewery-list')).toBeTruthy();
  expect(getAllByTestId('brewery-item')).toBeTruthy()
});
