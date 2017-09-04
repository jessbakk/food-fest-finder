import React from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

const WelcomePage = (props) => {
return (  
  <div>
    <NavBar 
    user={props.user} 
    handleLogout={props.handleLogout}
    />
    <Jumbotron />
  </div>
  );
}

export default WelcomePage;