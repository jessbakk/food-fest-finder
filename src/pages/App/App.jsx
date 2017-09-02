import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';


class App extends Component {
  constructor(props) {
    super(props);
  }

  /*---------- Helper Methods ----------*/


  /*---------- Callback Methods ----------*/

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }


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
              <SignupPage 
                handleSignup={this.handleSignup}
              />
            }/>


          </Switch>
        </Router>
        



      </div>
    )
  }
}



export default App;