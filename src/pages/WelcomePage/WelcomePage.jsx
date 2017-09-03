import React from 'react';
// import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const WelcomePage = (props) => {
return (  
  <div>
    <NavBar 
    user={props.user} 
    handleLogout={props.handleLogout}
    />
    <h1>Welcome Page</h1>
  </div>
  );
}

export default WelcomePage;