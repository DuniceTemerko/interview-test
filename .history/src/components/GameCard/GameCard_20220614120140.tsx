import React from 'react';

import styles from './GameCard.module.sass';

type GameCardProps = {
  imgSrc: string,
}

function GameCard({ imgSrc }) {
  return (
    <div className={styles['card']}>
      <img className={styles['card__img']} src={imgSrc} alt="game"/>
      <div className={styles['card__name']}></div>
    </div>
  );
}

export default GameCard;
