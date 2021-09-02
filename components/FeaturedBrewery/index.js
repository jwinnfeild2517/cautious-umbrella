import React, { useState, useContext, useEffect } from 'react';
import { LocationContext } from '../LocationContext';
import useSWR from 'swr';
import { usePosition } from 'use-position';

import BreweryHeroItem, { LoadingBreweryHeroItem } from '../BreweryHeroItem';

const FeaturedBrewery = () => {
  const { userLocation, updatelocation } = useContext(LocationContext)
  const {
    latitude,
    longitude,
    speed,
    timestamp,
    accuracy,
    error: geoError,
  } = usePosition();

  const { data, error } = useSWR(
    `https://api.openbrewerydb.org/breweries?by_dist=${userLocation.lat},${userLocation.longitude}&per_page=1`,
  );

  useEffect(() => {
    if (latitude && longitude) {
      updatelocation(latitude, longitude)
    }else {
      console.log(geoError);
    }
  }, [latitude, longitude])

  if (error || data?.length === 0) return "An error has occurred.";
  if (!data) return <LoadingBreweryHeroItem />;

  return (
    <BreweryHeroItem
      brewery={data?.[0]}
    />
  );
  };

export default FeaturedBrewery;
