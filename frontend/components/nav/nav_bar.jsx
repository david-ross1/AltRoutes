import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faHiking } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ currentUser, logout }) => {
  const userNav = currentUser ? (
    <>
      <div className="dropdown-select">
        <div className="profile-pic">
          <FontAwesomeIcon icon={faHiking} />
        </div>
        <p>{currentUser.first_name}</p>
      </div>
      <ul className="user-dropdown">
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </>
  ) :  
  (
    <>
      <Link to="/signup" className="sign-up-button">
        Sign Up
      </Link>
      <Link to="/login" className="login-button">
        Log In
      </Link>
    </>
  );

  return (
    <nav className="nav-bar">
      <div className="nav-links"></div>
      <div className="logo-title-div">
        <Link to="/" className="logo-title">
          <FontAwesomeIcon icon={faMountain} className="mountain-logo" />
          <h2>MoreTrails</h2>
        </Link>
      </div>
      <div className="user-nav">{userNav}</div>
    </nav>
  );
};

export default Nav;
