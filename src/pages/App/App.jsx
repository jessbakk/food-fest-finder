import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import EventsPage from '../EventsPage/EventsPage';
import AddEventPage from '../AddEventPage/AddEventPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  /*---------- Callback Methods ----------*/

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

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
        <Router>
          <Switch>
            <Route exact path='/' render={ () =>
              <WelcomePage 
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            }/>
            <Route exact path='/signup' render={(props) =>
              <SignupPage 
                {...props}
                handleSignup={this.handleSignup}
              />
            }/>
            <Route exact path='/login' render={(props) => 
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
            }/>
            <Route exact path='/events' render={() => 
              <EventsPage 
              user={this.state.user}
              events={this.state.events}
            />
            }/>
            <Route exact path='/addevent' render={() =>
            (
              userService.getUser() ? 
              <AddEventPage />
              :
              <Redirect to='/login' />
            )}/>
          </Switch>
        </Router>
        
      </div>
    )
  }
}

export default App;