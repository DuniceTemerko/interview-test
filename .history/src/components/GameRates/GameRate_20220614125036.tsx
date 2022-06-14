import { Progress }  from 'antd';
import React from 'react';

import 'antd/dist/antd.css';

function GameRate() {
  return (
    <div>
      <Progress type="circle" percent={75}/>
    </div>
  );
}

export default GameRate;
