import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import BrewerySummaryItem from '../BrewerySummaryItem';

const BreweryItem = styled.section`
  padding: 1rem;
  position: relative;

  h3 {
    margin: 0 0 1rem;
  }

  img {
    margin-bottom: 1em
  }

  a {
    text-decoration: underline;
  }

  p {
    margin: 0 0 0.5rem;
  }
`;

const BreweryDetail = ({brewery}) => (
  <BreweryItem>
    <Image
      unoptimized
      alt="Image of Delicous Food"
      src="https://loremflickr.com/1200/400/food?lock=30976"
      height={400}
      width={1200}
    />
    <BrewerySummaryItem brewery={brewery} />
  </BreweryItem>
);

BreweryDetail.propTypes = {
  brewery: PropTypes.object.isRequired,
};

export default BreweryDetail;
