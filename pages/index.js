import PropTypes from 'prop-types';

import BrewerySummaryGrid from '../components/BrewerySummaryGrid';
import FeaturedBrewery from '../components/FeaturedBrewery';
import BrewerIndexLayout from '../layouts/BreweryLayout';

export default function BreweryHomePage({
  data,
}) {
  return (
    <BrewerIndexLayout>
      <h1>Brewery Finder</h1>
      <FeaturedBrewery />
      <BrewerySummaryGrid
        breweries={data}
      />
    </BrewerIndexLayout>
  )
}

BreweryHomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export async function getStaticProps({ params }) {
  const revalidate = 30;
  let statusCode = 200;
  const response = await fetch('https://api.openbrewerydb.org/breweries').catch((err) => {
    statusCode = 500;
  });
  const data = await response.json();

  return {
    props: { data, statusCode },
    revalidate,
  };
}
