import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';


const BreweryItem = styled.article`

  border-radius: 3px;
  box-shadow: 5px 8px 15px 0 rgb(0 0 0 / 20%);
  height: 100%;
  padding: 1rem;
  position: relative;

  .brewery {
    &__title {
      font-size: 16px;
      margin: 0 0 1rem;
      color: #6e6f84;
      justify-content: space-between;

      a {
        &:hover {
          color: black;
        }
      }
    }

    &__type {
      background-color: ${({theme}) => theme.colors.primary};
      border-radius: 0.25rem;
      color: white;
      font: 0.85rem/1 sans-serif;;
      padding: 0.5rem 0.5rem;
      text-transform: capitalize;
    }

    &__url {
      &:hover {
        background-color: beige;
      }
    }

  }

  .material-icons {
    font-size: 1.2em;
    color: red;
    margin-right: .5em;

    &.call {
      color: black;
    }
  }

  a {
    text-decoration: underline;
  }

  p {
    margin: 0 0 1rem;
    display: flex;
  }

  ${breakpoint('md')`
    .brewery {
      &__title {
        font: 20px/1.5 sans-serif;
      }
    }
  `}
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
    <p className="brewery__location"><span className="material-icons">
location_on
</span>{[city, state].join(', ')}</p>
    {phone && ( <p className="brewery__phone"><span className="material-icons call">
call
</span>{`${phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1)-$2-$3")}`}</p> )}
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
