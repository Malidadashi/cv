import React, { useEffect } from 'react';

const DownloadResumeButton = () => {
  useEffect(() => {
    // Function to handle the download
    const handleDownload = () => {
      const url = './FrontendResume.pdf'; // Path to your resume in the public folder
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    // Attach the event listener
    const downloadButton = document.getElementById('download-button');
    if (downloadButton) {
      downloadButton.addEventListener('click', handleDownload);
    }

    // Clean up the event listener
    return () => {
      if (downloadButton) {
        downloadButton.removeEventListener('click', handleDownload);
      }
    };
  }, []);

  return (
    <button id="download-button">Download Resume</button>
  );
};

export default DownloadResumeButton;
