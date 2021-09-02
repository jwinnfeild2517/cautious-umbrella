import React, { useState } from 'react';

export const LocationContext = React.createContext()

const LocationProvider = ((props) => {

  const [userLocation, setUserLocation]  = useState({lat: '40.730610', long: '-73.935242'})

  const updateLocation = (lat, long) => {
    setUserLocation({lat, long})
  }

  return (
    <LocationContext.Provider value={{userLocation: userLocation}}>
      {props.children}
    </LocationContext.Provider>
  );
});

export default LocationProvider;
