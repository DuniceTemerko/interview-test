import React from 'react';

import styles from './RedRoundButton.module.sass';

type red

function RedRoundButton({ children }) {
  return (
    <button>{children}</button>
  );
}

export default RedRoundButton;
