import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className="row">
      <nav className="navbar navbar-fixed-top nav-align-items">
        <div className="align-left col-md-3 text-center special-logo">
          <Link to="/">FoodFestFinder</Link>
        </div>
        <div className="align-right col-md-8 text-right">
          <Link to="/events"><span>EVENTS</span></Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to="/" >HOME</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to="" onClick={props.handleLogout} >LOG OUT</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <span className="NavBar-welcome">Welcome, {props.user.name}</span>
        </div>
      </nav>
    </div>
    :
      <nav className="navbar navbar-fixed-top nav-align-items">
        <div className="align-left col-md-3 text-center special-logo">
          <Link to="/">FoodFestFinder</Link>
        </div>
        <div className="align-right col-md-8 text-right">
          <Link to="/events">EVENTS</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to="/login">LOG IN</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to="/signup">SIGN UP</Link>
        </div>
      </nav>;

  return (
    <div className="nav-custom">
      {nav}
    </div>
  );
};

export default NavBar;