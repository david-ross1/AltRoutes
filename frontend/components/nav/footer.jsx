import React from 'react';
import { Link } from 'react-router-dom';
import { faMountain, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faLinkedin,
  faGithub,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-logo">
        <Link to="/">
          <FontAwesomeIcon icon={faMountain} className="footer-mountain-logo" />
          <h2 className="footerh2">MoreTrails</h2>
        </Link>
      </div>
      <div className="footer-logo links">
        <a
          href="https://github.com/david-ross1"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/david-ross-988426216/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://angel.co/u/david-ross-72"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faAngellist} />
        </a>

        <a href="https://www.davidross1.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInfo} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
