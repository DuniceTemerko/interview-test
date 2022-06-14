import { Rate }  from 'antd';
import React from 'react';

import styles from './GameRate.module.sass';
import 'antd/dist/antd.css';

const rateStyles = {
  fontSize: '10px',
  color: 'background: #FF9500';
}

function GameRate() {
  return (
    <div className={styles['game-rate']}>
      <Rate allowHalf defaultValue={4.5}/>
    </div>
  );
}

export default GameRate;
