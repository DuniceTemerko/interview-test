import React from 'react';
import styled from 'styled-components';

import brandImage from '../../assets/brandImage.svg';

function CasinoCard() {
  return (
    <>
      <img src={brandImage} alt="brandIMage" />
    </>
  );
}

const StyledCasinoCard = styled(CasinoCard)`
`;

export default CasinoCard;
