import React from 'react';

import styles from './PromoBanner.module.sass';

type PromoBannerProps = {
    title: string;
    text: string;
    age: string;
    url: string;
}
function PromoBanner({ offer }: { offer: PromoBannerProps }) {
  return (
    <div className={styles['promo']}>
      <div className={styles['promo__title']}>Get 200% Bonus up to $200 + 32 Super Spins</div>
      <div className={styles['promo__text']}>New player offer - T&Cs apply</div>
      <div className={styles['promo__link']}><span>18+</span>, Begambleaware.org</div>
    </div>
  );
}

export default PromoBanner;
