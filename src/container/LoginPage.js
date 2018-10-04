import React, { Component } from 'react';

import Background from '../components/Background';
import Img from '../components/Logo';
import logo from '../image/logo.png';
import TextShow from '../components/TextShow';
import Button from '../components/Button';
import Div from '../components/DivFlex';
import './LoginPage.scss';

class LoginPage extends Component {
  render() {
    return (
      <Background>
        <Div>
          <Img className="logo" src={logo} alt="BookSeller.com" />
          <TextShow />
          <Div className="btn-section">
            <Button>Guest</Button>
            <Button>Login/SignUp</Button>
          </Div>  
        </Div>
      </Background>
    );
  }
}

export default LoginPage;