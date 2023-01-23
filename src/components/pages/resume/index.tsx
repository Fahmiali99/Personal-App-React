import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-center font-medium text-3xl sm:text-3xl pt-5">
          Resume
        </h1>
        <p className="text-center my-4">
          This is my resume, and all about me at inside
        </p>
        <div className="flex justify-center">
          <a
            href="../resume.pdf"
            download="Fahmi_Ali_Husni.pdf"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            <span className="flex items-center">
              <i className="fa-solid fa-cloud-arrow-down"></i>
              <p className="mx-2">Download CV</p>
            </span>
          </a>
        </div>
      </div>
      <div>
        <div className="py-5 sm:py-10">
          <Document
            file={`../resume.pdf`}
            className="flex justify-center shadow ..."
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default Resume;
