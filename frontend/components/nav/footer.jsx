import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
  faHiking,
  faBars,
  faGithub,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <FontAwesomeIcon icon={faMountain} className="footer-mountain-logo"/>
            <h2>More Trails</h2>
          </Link>
        </div>
       </div>
    </footer>
  );
};

export default Footer;
