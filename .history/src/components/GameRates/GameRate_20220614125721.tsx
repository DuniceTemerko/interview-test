import { Rate }  from 'antd';
import React from 'react';

import 'antd/dist/antd.css';

function GameRate() {
  return (
    <div>
      <Rate allowHalf  defaultValue={4.5}/>
    </div>
  );
}

export default GameRate;
