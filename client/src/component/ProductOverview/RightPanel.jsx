import React, {useState, useEffect} from 'react';
import OverviewCSS from './Overview.module.css';

const RightPanel = () => {
  return (
    <div className={OverviewCSS.rightPanel} id='right-panel'>
      <img src='https://www.clipartmax.com/png/full/133-1335198_ads-your-ad-here-png.png' />
    </div>
  );
}

export default RightPanel;