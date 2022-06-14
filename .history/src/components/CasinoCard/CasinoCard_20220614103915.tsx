import React from 'react';
import styled from 'styled-components';

import brandImage from '../../assets/brandImage.svg';

const MainBlock = styled.div`
  width: 200px;
  height: 300px;
  background-color: red;
  font-size: 32px;
;`;

function CasinoCard() {
  return (
    <MainBlock>
      <img src={brandImage} alt="brandIMage" />
    </MainBlock>
  );
}

export default CasinoCard;
