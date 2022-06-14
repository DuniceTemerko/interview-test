import React from 'react';

import brandImage from '../../assets/brandImage.svg';

import styles from './CasinoCard.module.sass'

function CasinoCard() {
  return (
    <div className={styles['casino-card']}>
      <img className={s} src={brandImage} alt="brandIMage" />
    </div>
  );
}

export default CasinoCard;
