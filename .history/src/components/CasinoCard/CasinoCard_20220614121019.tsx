import React from 'react';

import PromoBanner from '../PromoBanner/PromoBanner';

import book
import brandImage from '../../assets/brandImage.svg';
import styles from './CasinoCard.module.sass'



function CasinoCard() {
  return (
    <div className={styles['casino-card']}>
      <div className={styles['casino-card__view-block']}>
        <img className={styles['casino-card__company-icon']} src={brandImage} alt="brandIMage" />
        <div className={styles['casino-card__promo-banner']}>
          <PromoBanner/>
        </div>
        <div className={styles['casino-card__game-link-card']}>

        </div>
      </div>
      <div className={styles['casino-card__info-block']}>
        smth
      </div>
    </div>
  );
}

export default CasinoCard;
