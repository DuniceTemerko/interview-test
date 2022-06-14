import { Progress }  from 'antd';
import React from 'react';

function GameRate() {
  return (
    <div>
      <Progress type="circle" percent={75}/>
    </div>
  );
}

export default GameRate;
