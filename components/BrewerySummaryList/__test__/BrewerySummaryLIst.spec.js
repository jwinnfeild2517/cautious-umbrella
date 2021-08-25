import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import BrewerySummaryList from '../index';
import breweries from '../../../config/breweries';
import theme from '../../../config/theme';

describe('BrewerySummaryList component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={theme}>
        <BrewerySummaryList
          breweries={breweries}
        />
      </ThemeProvider>,
    )
  );

  it('render an image', () => {
    renderComponent();
    expect(screen.getByTestId('brewery-list'));
  });
});
