import React from 'react';

import styles from './GameCard.module.sass';

type GameCardProps = {
  imgSrc: string,
}

function GameCard({ imgSrc }) {
  return (
    <div className={styles['card']}>
      <img srfc
      />

    </div>
  );
}

export default GameCard;
