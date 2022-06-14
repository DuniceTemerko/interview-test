import React from 'react';

import brandImage from '../../assets/brandImage.svg';
import PromoBanner from '../PromoBanner/PromoBanner';

import styles from './CasinoCard.module.sass'

function CasinoCard() {
  return (
    <div className={styles['casino-card']}>
      <div className={styles['casino-card__view-block view-block']}>
        <img className={styles['view-block__company-icon']} src={brandImage} alt="brandIMage" />
        <PromoBanner/>
      </div>
      <div className={styles['casino-card__info-block']}>
        smth
      </div>
    </div>
  );
}

export default CasinoCard;
