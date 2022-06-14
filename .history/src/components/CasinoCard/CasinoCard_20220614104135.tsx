import React from 'react';
import styled from 'styled-components';

import brandImage from '../../assets/brandImage.svg';

import styles from './CasinoCard.module.sass'

function CasinoCard() {
  return (
    <div className="casino-ard">
      <img src={brandImage} alt="brandIMage" />
    </>
  );
}

export default CasinoCard;
