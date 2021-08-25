import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

import BrewerySummaryList from '../BrewerySummaryList';

const BreweryGrid = styled.section`
  li {
    margin-bottom: 1em;
  }

  ${breakpoint('md')`
    ul {
      display: grid;
      column-gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 1em;
    }

    li {
      margin-bottom: 0;
    }
  `}
`;

const BrewerySummaryGrid = ({
  breweries,
}) => (
  <BreweryGrid>
    <BrewerySummaryList
      breweries={breweries}
    />
  </BreweryGrid>
);

BrewerySummaryGrid.propTypes = {
  breweries: PropTypes.array,
};

BrewerySummaryGrid.defaultProps = {
  breweries: null,
};

export default BrewerySummaryGrid;
