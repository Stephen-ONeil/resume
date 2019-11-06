import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import { PaperResume } from './PaperResume.js';
import { ResponsiveResume } from './ResponsiveResume.js';
import { IconTray } from './IconTray/IconTray.js';

ReactDOM.render(
  <React.Fragment>
    <PaperResume />
    <ResponsiveResume />
    <IconTray />
  </React.Fragment>, 
  document.getElementById('root')
);