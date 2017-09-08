import React from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
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
    <Footer />
  </div>
  );
}

export default WelcomePage;