import { Rate }  from 'antd';
import React from 'react';

import styles from './GameRate.module.sass';
import 'antd/dist/antd.css';

const rateStyles = {
  fontSize: '17px',
  color: '#FF9500',
}

type GameRateProps = {
  rate: number,
  reviews: s,
}

function GameRate({ rate, reviews }: GameRateProps) {
  return (
    <div className={styles['game-rate']}>
      <Rate style={rateStyles} allowHalf defaultValue={rate}/>
      <div className={styles['game-rate__votes']}>Votes({rateStyles.reviews})</div>
      <div className={styles['game-rate__reviews']}></div>
    </div>
  );
}

export default GameRate;
