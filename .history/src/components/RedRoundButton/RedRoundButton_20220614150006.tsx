import React, { ReactNode } from 'react';

import styles from './RedRoundButton.module.sass';

type redRoundButtonProps = {
  children: Reac
}

function RedRoundButton({ children }) {
  return (
    <button>{children}</button>
  );
}

export default RedRoundButton;
