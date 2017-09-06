import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <nav className="navbar-right fixed-top">
        <Link to="/events">EVENTS</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to="/" >HOME</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to="" onClick={props.handleLogout} >LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className="NavBar-welcome">Welcome, {props.user.name}</span>
      </nav>
    </div>
    :
    <div>
      <nav className="navbar-right fixed-top">
        <Link to="/events">EVENTS</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/login">LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/signup">SIGN UP</Link>
      </nav>
    </div>;

  return (
    <div className="container">
      {nav}
    </div>
  );
};

export default NavBar;