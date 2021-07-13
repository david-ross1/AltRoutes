import React from "react";
import { Link } from "react-router-dom";
import { faMountain, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGithub,
  faAngellist,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <FontAwesomeIcon
              icon={faMountain}
              className="footer-mountain-logo"
            />
            <h2>MoreTrails</h2>
          </Link>
        </div>
        <div class="footer-logo links">
          <a href="https://www.linkedin.com/in/david-ross-988426216/"
            target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>


          <a href="https://github.com/david-ross1" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>


          <a href="https://www.davidross1.com" target="_blank">
            <FontAwesomeIcon icon={faInfo} />
          </a>
          <a href="https://angel.co/u/david-ross-72" target="_blank">
            <FontAwesomeIcon icon={faAngellist} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
