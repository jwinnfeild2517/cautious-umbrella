import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const BreweryItem = styled.section`
  padding: 1rem;
  position: relative;

  .brewery {
    &__type {
      background-color: ${({theme}) => theme.colors.primary};
      border-radius: 0.25rem;
      color: white;
      font: 0.85rem/1 sans-serif;
      padding: 0.25rem 0.5rem;
      float: right;
    }
  }

  h3 {
    margin: 0 0 1rem;
  }

  a {
    text-decoration: underline;
  }

  p {
    margin: 0 0 0.5rem;
  }
`;

const BreweryDetail = ({
  brewery: {
    id,
    name,
    brewery_type: type,
    city,
    state,
    phone,
    website_url: url,
  },
}) => (
  <BreweryItem>
    <Image
      unoptimized
      alt="Image of Delicous Food"
      src="https://loremflickr.com/1200/400/food?lock=30976"
      height={400}
      width={1200}
    />
    <h3>
      {name}
      <span className="brewery__type">{type}</span>
    </h3>
    <p className="brewery__location">{[city, state].join(', ')}</p>
    <p className="brewery__phone">{phone}</p>
    <p className="brewery__url">{url}</p>
  </BreweryItem>
);

BreweryDetail.propTypes = {
  brewery: PropTypes.object.isRequired,
};

export default BreweryDetail;
