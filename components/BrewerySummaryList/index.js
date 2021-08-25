import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import BrewerySummaryItem from '../BrewerySummaryItem';

const BreweryList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const BrewerySummaryList = ({
  breweries,
}) => (
  <BreweryList data-testid="brewery-list">
    {breweries.map(({ obdb_id: slug, ...brewery }) => (
      <li key={slug}>
        <BrewerySummaryItem
          brewery={brewery}
        />
      </li>
    ))}
  </BreweryList>
);

export default BrewerySummaryList;
