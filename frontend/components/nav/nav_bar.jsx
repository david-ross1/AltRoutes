import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faHiking } from "@fortawesome/free-solid-svg-icons";


const Nav = ({ currentUser, logout }) => {
  const navButtons = currentUser ? (
    <>
      <div>
        <p>Hi, {currentUser.first_name}</p>
      </div>
      {/* <ul className="user-dropdown"> */}
          <button className='logout-button' onClick={logout}>Logout</button>
      {/* </ul> */}
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
      <div className="nav-buttons">{navButtons}</div>
    </nav>
  );
};

export default Nav;
