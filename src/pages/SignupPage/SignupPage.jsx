import React, {Component} from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import NavBar from '../../components/NavBar/NavBar';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <br/>
            <br/>
            <br/>
            <SignupForm
            {...this.props}
            updateMessage={this.updateMessage}
            handleSignup={this.props.handleSignup}
            />
            <p>{this.state.message}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default SignupPage;