import React, { Reac} from 'react';

import styles from './RedRoundButton.module.sass';

type redRoundButtonProps = {
  children: 
}

function RedRoundButton({ children }) {
  return (
    <button>{children}</button>
  );
}

export default RedRoundButton;
