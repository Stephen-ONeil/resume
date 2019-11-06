import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import { PaperResume } from './PaperResume.js';
import { ResponsiveResume } from './ResponsiveResume.js';
import { DownloadPDF } from './DownloadPDF';

ReactDOM.render(
  <React.Fragment>
    <PaperResume />
    <ResponsiveResume />
    <DownloadPDF />
  </React.Fragment>, 
  document.getElementById('root')
);