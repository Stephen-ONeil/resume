import React from 'react';
import './DownloadPDF.scss';

function DownloadPDF(){
  return (
    <a className="download-pdf-link" href='stephen-oneil-resume.pdf' download>
      <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" transform="scale(0.8) rotate(90)">
        <title>Download as PDF</title>
        <polyline transform="scale(0.85) translate(0, 5.5)" points="66.5 36 5.5 72 21.5 36 5.5 0 66.5 36"/>
        <rect height="62.28571" width="7.14286" y="4.85714" x="63.57143"/>
      </svg>
    </a>
  );
}

export { DownloadPDF }