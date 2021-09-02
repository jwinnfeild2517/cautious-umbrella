import React, { useRef, useState } from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import AutoComplete from '../components/Autocomplete'
import useSWR from 'swr';
import { breakpoint } from 'styled-components-breakpoint';

const LayoutWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  max-width: calc(100% - 2rem);
  width: 1200px;

  header {
    background-color: transparent;
    flex-direction: column;
    color: white;
    display: flex;
    padding: 2em 0;
    align-items: center;

    a.nav-link {
      text-decoration: underline;
      margin-bottom: 10px;
      color: black;
      font-size: 1.5em;
    }

    form {
      margin-left: auto;

      label {
        margin-right: 10px;
        color: yellow;
        display: none;
      }

      input {
        margin-right: .5em;
        width: 20em;
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
  }

  main {
    padding: 0rem;
    font-family: 'Montserrat', sans-serif;
  }

  footer {
    font-size: 0.75em;
    margin-top: auto;
    padding: 1rem;
  }

  ${breakpoint('md')`
  main {
    padding: 2em;
  }
  header {
    flex-direction: row;
    padding: 1em 1em;
    background-color: #6e6f84;

    a.nav-link {
      font-size: 1em;
      color: white;
    }
  }
  `}
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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </Head>
      <header>
        <Link
          href="/"
        >
          <a className="nav-link">Home</a>
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
