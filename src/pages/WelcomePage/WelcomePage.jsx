import React from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import IntroComponent from '../../components/IntroComponent/IntroComponent'

const WelcomePage = (props) => {
return (  
  <div>
    <NavBar 
    user={props.user} 
    handleLogout={props.handleLogout}
    />
    <Jumbotron />
    <IntroComponent />
  </div>
  );
}

export default WelcomePage;