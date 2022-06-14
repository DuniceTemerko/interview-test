import React, { ReactNode } from 'react';

import styles from './RedRoundButton.module.sass';

type redRoundButtonProps = {
  children: ReactNode;
}

function RedRoundButton({ children }:redRoundButtonProps) {
  return (
    <button>{children}</button>
  );
}

export default RedRoundButton;
