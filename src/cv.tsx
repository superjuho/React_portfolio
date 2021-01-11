import React, { useState } from 'react';
import {  Page } from 'react-pdf/dist/esm/entry.parcel';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Document, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import "./cv.css"


import pdfFile from './static/JuhoPuurunen_Resume2020.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
  cMapPacked: true,
};

const CurriculumVitae = () => {
  
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages } : { numPages: any}) {
    setNumPages(nextNumPages);
  }

  return (
      <>
    <div className="header"> 
    <h1>Juho Puurunen Portfolio</h1>
</div>
    <div className="CV">
      <div className="CV_container">
        <div className="CV_document">
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
            options={options}
          >
            {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ),
              )
            }
          </Document>
        </div>
      </div>
    </div>
    </>
  );
}

export default CurriculumVitae;