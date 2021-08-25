import React, { useState } from 'react';
import useSWR from 'swr';
import { usePosition } from 'use-position';

import BreweryHeroItem, { LoadingBreweryHeroItem } from '../BreweryHeroItem';

const FeaturedBrewery = () => {
  const {
    latitude,
    longitude,
    speed,
    timestamp,
    accuracy,
    error: geoError,
  } = usePosition();

  const { data, error } = useSWR(
    `https://api.openbrewerydb.org/breweries?by_dist${latitude},${longitude}&per_page=1`,
  );

  if (geoError) return null;
  if (error || data?.length === 0) return "An error has occurred.";
  if (!data) return <LoadingBreweryHeroItem />;

  return (
    <BreweryHeroItem
      brewery={data?.[0]}
    />
  );
  };

export default FeaturedBrewery;
