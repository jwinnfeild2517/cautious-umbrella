import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const BreweryHero = styled.article`
  background: center center url("https://loremflickr.com/1200/400/beer?lock=30976");
  background-size: cover;
  border: 1px solid gray;
  border-radius: 3px;
  box-shadow: 0 12px 50px 0 rgba(0,0,0,0.1);
  height: 400px;
  margin-bottom: 5rem;
  padding: 1rem;
  position: relative;

  .brewery {
    &__type {
      background-color: ${({theme}) => theme.colors.tertiary};
      border-radius: 0.25rem;
      color: white;
      font: 0.85rem/1 sans-serif;
      padding: 0.25rem 0.5rem;
      float: right;
    }
  }

  h2 {
    background-color: ${({theme}) => theme.colors.secondary};
    color: black;
    border-radius: 0.25rem;
    position: absolute;
    padding: 0.5rem 1rem;
    top: 1rem;
    right: 1rem;
  }

  h3 {
    margin: 0 0 1rem;
  }

  .brewery-info {
    background-color: rgba(0,0,0,0.8);
    box-shadow: 0 5px 30px 0 rgba(0,0,0,0.5);
    border-radius: 1rem;
    bottom: 1rem;
    color: white;
    left: 1rem;
    padding: 1rem 2rem;
    position: absolute;
    min-width: 40rem;
    max-width: calc(100% - 2rem);
  }

  a {
    text-decoration: underline;
  }

  p {
    margin: 0 0 0.5rem;
  }
`;

const BreweryHeroItem = ({
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
  <BreweryHero>
    <h2>Featured Brewery</h2>
    <div className="brewery-info">
      {type && (
        <span className="brewery__type">{type}</span>
      )}
      <h3>
        <Link
          href={`/brewery/${id}`}
        >
          {name}
        </Link>
      </h3>
      <p className="brewery__location">{[city, state].join(', ')}</p>
      <p className="brewery__phone">{phone}</p>
      <p className="brewery__url">{url}</p>
    </div>
  </BreweryHero>
);

BreweryHeroItem.propTypes = {
  brewery: PropTypes.object.isRequired,
};

export const LoadingBreweryHeroItem =  () => (
  <BreweryHeroItem
    brewery={{
      name: 'Loading...',
      city: 'Somewhere',
      state: 'Near You',
    }}
  />
);

export default BreweryHeroItem;
