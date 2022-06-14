import React from 'react';
import styled from 'styled-components';

import brandImage from '../../assets/brandImage.svg';

import styles from './CasinoCard.module.sass'

const MyDiv = styled.div`
  width: 200px;
  height: 300px;
  background-color: red;
  font-size: 32px;
;`;

function CasinoCard() {
  return (
    <MyDiv>
      {/* <img src={brandImage} alt="brandIMage" />
       */}
       12312321чц
    </MyDiv>
  );
}

const StyledCasinoCard = styled(CasinoCard)`
  background-color: red;
`;

export default StyledCasinoCard;
