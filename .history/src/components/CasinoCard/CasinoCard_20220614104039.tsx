import React from 'react';
import styled from 'styled-components';

import brandImage from '../../assets/brandImage.svg';

function CasinoCard() {
  return (
    <MainBlock>
      <img src={brandImage} alt="brandIMage" />
    </MainBlock>
  );
}

export default CasinoCard;
