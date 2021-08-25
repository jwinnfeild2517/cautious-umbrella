import PropTypes from 'prop-types';

import BreweryDetail from '../../components/BreweryDetail';
import BrewerIndexLayout from '../../layouts/BreweryLayout';

export default function BreweryDetailPage({
  data,
}) {
  return (
    <BrewerIndexLayout>
      <BreweryDetail
        brewery={data}
      />
    </BrewerIndexLayout>
  )
}

BreweryDetailPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  let statusCode = 200;
  const response = await fetch(`https://api.openbrewerydb.org/breweries/${id}`).catch((err) => {
    statusCode = 500;
  });
  const data = await response.json();

  return {
    props: { data, statusCode },
    revalidate: 30,
  };
}
