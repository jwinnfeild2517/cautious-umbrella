import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';


const AutoCompleteContainer = styled.ul`
  position: absolute;
  background: black;
  list-style: none;
  right: 0;
  width: 100%;
  top: 5.5em;
  padding: 1em 1em;
  z-index: 1;

  li {
    margin-bottom: 10px;
    text-decoration: underline;

    a {
      color: white;
      &:hover {
        background-color: yellow;
        color: black;
      }
    }
  }

  ${breakpoint('lg')`
    top: 1.5em;
    width: 23em;
  `}

`

const AutoComplete = ({breweries, showAutoComplete}) => {

  console.log(breweries);
  return(
    <AutoCompleteContainer>
      {breweries.slice(0, 7).map((brewery) => (
      <li key={brewery.obdb_id}>
        <Link href={`/search?q=${brewery.name}`}>
          <a aria-label={`search for ${brewery.name}`}>{brewery.name}</a>
        </Link>
      </li>
    ))}
    </AutoCompleteContainer>
  )
}


AutoComplete.propTypes = {
  breweries: PropTypes.array,
};

export default AutoComplete
