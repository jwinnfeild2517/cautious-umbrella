import Head from 'next/head'
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  background-color: white;
  display: flex;
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
}) => (
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
        <form action="/search">
          <input
            name="q"
            placeholder="Search breweries"
            type="search"
          />
          <button type="submit">Search</button>
        </form>
      )}
    </header>
    <main>
      {children}
    </main>
    <footer>
      Get Your Beer On
    </footer>
  </LayoutWrapper>
);

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
