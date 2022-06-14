import { Rate }  from 'antd';
import React from 'react';

import styles from './GameRate.module.sass';
import 'antd/dist/antd.css';

const rateStyles = {
  fontSize: '17px',
  color: '#FF9500',
}

function GameRate({ rate }) {
  return (
    <div className={styles['game-rate']}>
      <Rate style={rateStyles} allowHalf defaultValue={4.5}/>
    </div>
  );
}

export default GameRate;
