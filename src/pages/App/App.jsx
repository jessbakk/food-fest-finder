import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import userService from '../../utils/userService';
import WelcomePage from '../WelcomePage/WelcomePage';
import SignupPage from '../SignupPage/SignupPage';


class App extends Component {
  constructor(props) {
    super(props);
  }

  /*---------- Helper Methods ----------*/
  /*---------- Callback Methods ----------*/
  /*---------- Lifecycle Methods ----------*/

  render() {
    return (
      <div>
        <header> FOODFEST FINDER </header>
        <Router>
          <Switch>
            <Route exact path='/' render={ () =>
              <WelcomePage />
            }/>
            <Route exact path='/signup' render={() =>
              <SignupPage />
            }/>


          </Switch>
        </Router>
        



      </div>
    )
  }
}



export default App;