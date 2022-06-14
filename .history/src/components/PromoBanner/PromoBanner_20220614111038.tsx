import React from 'react';

import styles from './PromoBanner.module.sass';

function PromoBanner() {
  return (
    <div className={styles['promo']}>
      <div className={styles['promo__title']}>Get 200% Bonus up to $200 + 32 Super Spins</div>
      <div className={styles['promo__text']}></div>
      <div className={styles['promo__link']}></div>
    </div>
  );
}

export default PromoBanner;
