import React from 'react';
import './DownloadPDF.scss';

function DownloadPDF(){
  return (
    <a className="download-pdf-link" href='stephen-oneil-resume.pdf' download>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  x="0px" y="0px" aria-hidden="false">
          <title>Download resume as PDF</title>
          <g>
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
          </g>
        </svg>
    </a>
  );
}

export { DownloadPDF }