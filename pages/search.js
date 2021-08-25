import { useRouter } from 'next/dist/client/router';
import Head from 'next/head'

import BrewerySearch from '../components/BrewerySearch';
import BrewerIndexLayout from '../layouts/BreweryLayout';

export default function SearchPage({ q }) {
  return (
    <BrewerIndexLayout isSearch>
      <BrewerySearch
        query={q}
      />
    </BrewerIndexLayout>
  )
}

export async function getServerSideProps({ query }) {
  const { q } = query;
  return {
    props: { q },
  };
}
