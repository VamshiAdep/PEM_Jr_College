// src/components/SchoolBroucher.jsx

import React from 'react';
import pdf from "../assets/resume.pdf"

const SchoolBroucher = () => {
 

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      {/* Toolbar */}
      <div style={{
        position: 'absolute',
        top: 10,
        right: 20,
        zIndex: 10,
        display: 'flex',
        gap: '10px'
      }}>
        <a
          href={pdf}
          download
          style={{
            padding: '8px 12px',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none'
          }}
        >
          Download PDF
        </a>
        <button
          onClick={() => window.print()}
          style={{
            padding: '8px 12px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Print
        </button>
      </div>

      {/* PDF Viewer */}
      <iframe
        src={pdf}
        title="School Broucher"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default SchoolBroucher;
