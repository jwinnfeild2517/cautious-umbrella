import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

import BrewerySummaryGrid from '../BrewerySummaryGrid'

const SearchWrapper = styled.section`
  padding: 3rem 1rem;

  form {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    display: flex;
    margin: 0 auto 2rem;
    max-width: 600px;
    padding: 0.5rem;
    width: 75%;

    input {
      border: 0;
      flex: 1 0 0;
    }

    label {
      display: none;
    }

    button {
      background-color: black;
      border-radius: 0.25rem;
      color: white;
      border: 0;
      font: 12px/1 sans-serif;
      padding: 0.5rem;
      text-transform: uppercase;
      -webkit-appearance: none;

      &:hover {
        background-color: red;
        cursor: pointer;
      }
    }
  }
`;

const BrewerySearch = ({
  query,
}) => {
  const [inputValue, setInputValue] = useState(query);
  const [searchTerm, setSearchTerm] = useState(query);
  const inputRef = useRef();

  const { data, error } = useSWR(
    `https://api.openbrewerydb.org/breweries/search?query=${searchTerm}`,
  );

  const onSubmit = (evt) => {
    evt.preventDefault();
    setSearchTerm(inputRef.current.value);
  }

  const onChange = (evt) => {
    setInputValue(evt.target.value);
  }

  if (error) return null;

  return (
    <SearchWrapper>
    <form onSubmit={onSubmit}>
      <label htmlFor="searchbreweries">Search Breweries</label>
      <input
        name="query"
        id="searchbreweries"
        onChange={onChange}
        placeholder="Search breweries"
        ref={inputRef}
        type="search"
        value={inputValue}
      />
      <button type="submit">Search</button>
    </form>
    {data?.length > 0 && (
      <>
        <p data-testid='results-heading' >Showing results for <strong>{searchTerm}</strong></p>
        <BrewerySummaryGrid
          breweries={data}
        />
      </>
    )}
    </SearchWrapper>
  );
};

BrewerySearch.propTypes = {
  query: PropTypes.string,
};

BrewerySearch.defaultProps = {
  query: '',
};

export default BrewerySearch;
