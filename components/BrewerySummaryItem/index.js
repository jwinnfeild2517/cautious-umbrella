import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const BreweryItem = styled.article`
  border: 1px solid gray;
  border-radius: 3px;
  box-shadow: 5px 8px 15px 0 rgb(0 0 0 / 20%);
  height: 100%;
  padding: 1rem;
  position: relative;

  .brewery {
    &__title {
      font: 20px/1.5 sans-serif;
      margin: 0 0 1rem;
    }

    &__type {
      background-color: ${({theme}) => theme.colors.primary};
      border-radius: 0.25rem;
      color: white;
      font: 0.85rem/1 sans-serif;
      padding: 0.25rem 0.5rem;
      float: right;
    }
  }

  a {
    text-decoration: underline;
  }

  p {
    margin: 0 0 0.5rem;
  }
`;

const BrewerySummaryItem = ({
  brewery: {
    id,
    name,
    brewery_type: type,
    city,
    state,
    phone,
    website_url: url,
  },
}) => (
  <BreweryItem data-testid='brewery-item'>
    <p className="brewery__title">
      <Link href={`/brewery/${id}`}>
          <a aria-label={`see more about the ${name} brewery`} >{name}</a>
      </Link>
      <span className="brewery__type">{type}</span>
    </p>
    <p className="brewery__location">{[city, state].join(', ')}</p>
    <p className="brewery__phone">{phone}</p>
    {url && (
      <a className="brewery__url" aria-label={`go to the ${name} brewery website`} href={url} target="_blank" rel="nofollow noreferrer">
        Brewery Website
      </a>
    )}
  </BreweryItem>
);

BrewerySummaryItem.propTypes = {
  brewery: PropTypes.object.isRequired,
};

export default BrewerySummaryItem;
