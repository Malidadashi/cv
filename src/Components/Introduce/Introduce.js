// src/components/Introduce.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './introduce.css';
import DownloadResumeButton from '../../Hooks/DownloadResumeButton/DownloadResumeButton';
import ScrollAnimation from '../../Animations/ScrollAnimation/ScrollAnimation';

const Introduce = () => {
  return (
    <div className="introduce">
      <div className='introduce-image'>
        <img src={''} />
      </div>
      <div className='introduce-middle'>
        <h2 className="introduce-title">
          <FontAwesomeIcon icon={faHandPaper} className="wave-hand-icon" /> Hi, I'm Negar
        </h2>
        <h3 className="introduce-subtitle">Frontend Developer</h3>
        <p className="introduce-text">
          Dynamic Frontend Developer with a passion for crafting responsive and user-centric web experiences using the cutting-edge Next.js framework.
        </p>
        <DownloadResumeButton />
        <ScrollAnimation />
      </div>

      <div className="social-icons">
        <div className="social-icons-column">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
