import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { Resume } from './Resume.js';
import { DownloadPDF } from './DownloadPDF'

ReactDOM.render(
  <React.Fragment>
    <Resume />
    <DownloadPDF />
  </React.Fragment>, 
  document.getElementById('root')
);