import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


const AutoCompleteContainer = styled.ul`
  position: absolute;
  background: black;
  list-style: none;
  right: 0;
  top: 1.5em;
  width: 23em;
  padding: 1em 1em;
  z-index: 1;

  li {
    margin-bottom: 10px;
    text-decoration: underline;

    &:hover {
      background-color: yellow;
      color: black;
    }
  }
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
