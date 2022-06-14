import React from 'react';

import PromoBanner from '../PromoBanner/PromoBanner';
import GameCard, { GameCardProps } from '../GameCard/GameCard';

import bookOfDead from '../../assets/bookOfDead.jpg';
import buffalo from '../../assets/buffalo.jpg';
import starburst from '../../assets/starburst.jpg';
import brandImage from '../../assets/brandImage.svg';
import styles from './CasinoCard.module.sass'
import GameRate from '../GameRates/GameRate';
import { Progress } from 'antd';
import RedRoundButton from '../RedRoundButton/RedRoundButton';

const games: GameCardProps[] = [
  {
    image: {
      src: buffalo,
      alt: '',
    },
    name: 'Buffalo Slot Machine',
  },
  {
    image: {
      src: starburst,
      alt: '',
    },
    name: 'Starburst™ Slot'
  },
  {
    image: {
      src: bookOfDead,
      alt: '',
    },
    name: 'Book of Dead Slot Machine'
  },
];

  {
    "providerName": "888 Casino",
    "providerDisclaimerHiderForDesktop": true,
    "providerLogo": {
      "hideNumber": true,
      "logo": {
        "src": "https://10bestcasinos.co.uk/assets/1592576083431.svg",
        "alt": ""
      },
      "logoMobile": {
        "src": "https://10bestcasinos.co.uk/assets/1592576083431.svg",
        "alt": ""
      },
      "useAltLogoForMobile": true
    },
    "providerRating": {
      "value": 9.8,
      "linkText": "Read Review",
      "page": {
        "path": "#",
        "title": "Read Review",
        "id": 0
      },
      "votes": 13844,
      "votesFollowText": "votes"
    },
    "minDeposit": "$10",
    "minDepositLabel": "Min Deposit",
    "providerBonus": {
      "offerTitle": "Get 200% Bonus up to $200 + 32 Super Spins",
      "offerSubText": "New player offer - T&Cs apply. 18+, Begambleaware.org"
    },
    "providerScore": {
      "score": 9.8,
      "progressBar": true,
      "animation": true
    },
    "providerVisitLink": {
      "link": "#",
      "text": "Get Bonus"
    },
    "providerLegalDisclaimer": "1st deposit only • £20 min deposit • valid for selected games • bonus wins capped at £200 • 50x wagering -req. vary by game • bonus expires in 21 days • payment method & country restrictions apply",
    "slotsImages": [
      {
        "image": {
          "src": "https://d14egw19m1ttef.cloudfront.net/s3:thetop10casinoscom/assets/Starburst.jpg/fit-in/96x0",
          "alt": ""
        },
        "text": "Money Train 2"
      },
      {
        "image": {
          "src": "https://d14egw19m1ttef.cloudfront.net/s3:thetop10casinoscom/assets/Money%20Train%202.jpg/fit-in/96x0",
          "alt": ""
        },
        "text": "Fluffy Favourites"
      },
      {
        "image": {
          "src": "https://d14egw19m1ttef.cloudfront.net/s3:thetop10casinoscom/assets/9%20Pots%20of%20Gold.jpg/fit-in/96x0",
          "alt": ""
        },
        "text": "Starburst"
      }
    ]
  }
]



const countPercent = (percent: number | undefined) => {
  if(percent) return`${percent * 0.1}`;
};


function CasinoCard() {
  return (
    <>
      <div className={styles['casino-card']}>
        <div className={styles['casino-card__view-block']}>
          <img className={styles['casino-card__company-icon']} src={brandImage} alt="brandIMage" />
          <div className={styles['casino-card__promo-banner']}>
            <PromoBanner/>
          </div>
          <div className={styles['casino-card__game-link-card']}>
            {games.map((item) => (
              <GameCard image={item.image} name={item.name} />
            ))}
          </div>
          <div className={styles['casino-card__rate']}>
            <GameRate rate={4.5} reviews={'39,338'} />
          </div>
          <div className={styles['casino-card__circle-rate']}>
            <Progress strokeColor="#F5A623" trailColor="#CED0D4" width={58} type="circle" percent={98} format={countPercent} />
          </div>
          <div className={styles['casino-card__bonus-button']}>
            <RedRoundButton>Get Bonus</RedRoundButton>
            <div className={styles['casino-card__min-dep']}>Min. Deposit - £10</div>
          </div>
        </div>
        <div className={styles['casino-card__info-block']}>
          New Customers Only. Opt In Required. 7 Day Free Spin Expiry. New Customers Only. Opt In Required. 7 Day Free Spin Expiry. All Free Spins Will Auto Play On First Eligible Game Loaded. £10 Staking Requirement Must Be Met Within 30 Days Of Opt In. Eligibility Restrictions Apply. 18+ Further T&Cs Apply. Begambleaware.Org
        </div>
      </div>

      <div className={styles['casino-card__mobile-info-block']}>
        New Customers Only. Opt In Required. 7 Day Free Spin Expiry. New Customers Only. Opt In Required. 7 Day Free Spin Expiry. All Free Spins Will Auto Play On First Eligible Game Loaded. £10 Staking Requirement Must Be Met Within 30 Days Of Opt In. Eligibility Restrictions Apply. 18+ Further T&Cs Apply. Begambleaware.Org
      </div>
    </>
  );
}

export default CasinoCard;
