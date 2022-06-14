import React from 'react';

import PromoBanner from '../PromoBanner/PromoBanner';
import GameCard, { GameCardProps } from '../GameCard/GameCard';

import bookOfDead from '../../assets/bookOfDead.jpg';
import buffalo from '../../assets/buffalo.jpg';
import starburst from '../../assets/starburst.jpg';
import brandImage from '../../assets/brandImage.svg';
import styles from './CasinoCard.module.sass'

const games: GameCardProps[] = [
  {
    imgSrc: buffalo,
    name: 'Buffalo Slot Machine',
  },
  {
    imgSrc: starburst,
    name: 'Starburst™ Slot'
  },
  {
    imgSrc: bookOfDead,
    name: 'Book of Dead Slot Machine'
  },
];


function CasinoCard() {
  return (
    <div className={styles['casino-card']}>
      <div className={styles['casino-card__view-block']}>
        <img className={styles['casino-card__company-icon']} src={brandImage} alt="brandIMage" />
        <div className={styles['casino-card__promo-banner']}>
          <PromoBanner/>
        </div>
        <div className={styles['casino-card__game-link-card']}>
          {games.map((item) => (
            <GameCard imgSrc={item.imgSrc} name= />
          ))}
        </div>
      </div>
      <div className={styles['casino-card__info-block']}>
      Starburst™ Slot 
      </div>
    </div>
  );
}

export default CasinoCard;
