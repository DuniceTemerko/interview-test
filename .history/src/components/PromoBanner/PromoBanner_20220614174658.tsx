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
      <div className={styles['promo__title']}>{offer.title}</div>
      <div className={styles['promo__text']}>{offer.text}</div>
      <div className={styles['promo__link']}><span>{offer.age}</span>, Begambleaware.org</div>
    </div>
  );
}

export default PromoBanner;
