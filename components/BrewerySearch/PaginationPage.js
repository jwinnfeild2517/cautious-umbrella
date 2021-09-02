import PropTypes from 'prop-types';
import React, { useState } from 'react';
import BrewerySummaryGrid from '../BrewerySummaryGrid'
import styled from 'styled-components';

const Button = styled.button`
    background-color: black;
    border-radius: 0.25rem;
    color: white;
    border: 0;
    font: 12px/1 sans-serif;
    padding: 0.5rem;
    text-transform: uppercase;
    -webkit-appearance: none;
    margin: 2em .5em;

    &:hover {
      background-color: red;
      cursor: pointer;
    }
`

const PaginationPage = ({ breweries }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [brewsPerPage, setBrewsPerPage] = useState(4)
  const pageNumbers = []


  const indexOfLastBrewery = currentPage * brewsPerPage
  const indexOfFirstBrewery = indexOfLastBrewery - brewsPerPage
  const currentResults = breweries.slice(indexOfFirstBrewery, indexOfLastBrewery)


  for (let index = 1; index < Math.ceil(breweries.length / brewsPerPage); index++) {
    pageNumbers.push(index)
  }


  const moreResults = () => {
    if (currentPage !== pageNumbers[pageNumbers.length - 1] ) {
      setBrewsPerPage(brewsPerPage + 2)
    }
  }

  const nextPage = () => {
    if (currentPage !== pageNumbers[pageNumbers.length - 1] ) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage != pageNumbers[0]) {
      setCurrentPage(currentPage - 1)
    }
  }

  return(
    <>
      <BrewerySummaryGrid
        breweries={currentResults}
      />
      <Button onClick={nextPage}>Next Page</Button>
      <Button onClick={prevPage}>Previous Page</Button>
      <Button onClick={moreResults}>Show 2 More Results</Button>
    </>
  )
}

PaginationPage.propTypes = {
  breweries: PropTypes.array,
};

export default PaginationPage;
