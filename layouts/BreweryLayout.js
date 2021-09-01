import React, { useRef, useState } from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import AutoComplete from '../components/Autocomplete'
import useSWR from 'swr';

const LayoutWrapper = styled.div`
  background-color: white;
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  max-width: calc(100% - 2rem);
  width: 1200px;

  header {
    background-color: black;
    color: white;
    display: flex;
    padding: 0.5rem 1rem;

    form {
      margin-left: auto;

      label {
        margin-right: 10px;
        color: yellow;
      }
    }
  }

  main {
    padding: 2rem;
  }

  footer {
    font-size: 0.75em;
    margin-top: auto;
    padding: 1rem;
  }
`;

const BreweryIndexLayout = ({
  children,
  isSearch,
}) => {

  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef();

  const { data, error } = useSWR(
    `https://api.openbrewerydb.org/breweries/search?query=${searchTerm}`,
  );

  const onChange = () => {
    setSearchTerm(inputRef.current.value);
  }

  return(
    <LayoutWrapper>
      <Head>
        <title>ATK JS Challenge</title>
        <meta name="description" content="Clean up our mess" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link
          href="/"
        >
          Home
        </Link>
        {!isSearch && (
          <form data-testid="nav-search-form" action="/search">
            <label htmlFor="searchbreweries">Search breweries</label>
            <input
              name="q"
              onChange={onChange}
              placeholder="Search breweries"
              type="search"
              id="searchbreweries"
              ref={inputRef}
            />
            <button type="submit">Search</button>
          </form>
        )}
        {data?.length > 0 && (
          <AutoComplete
            breweries={data}
          />
        )}
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>Get Your Beer On</p>
      </footer>
    </LayoutWrapper>
  )
};

BreweryIndexLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isSearch: PropTypes.bool,
};

BreweryIndexLayout.defaultProps = {
  isSearch: false,
};

export default BreweryIndexLayout;
