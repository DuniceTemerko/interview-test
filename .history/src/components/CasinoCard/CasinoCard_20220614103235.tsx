import React from 'react';
import styled from 'styled-components';

import brandImage from '../../assets/brandImage.svg';

import styles from './CasinoCard.module.sass'

function CasinoCard() {
  return (
    <div>
      <img src={brandImage} alt="brandIMage" />
    </div>
  );
}

const StyledCasinoCard = styled(CasinoCard) 

export default CasinoCard;
