import React, { Component } from 'react';

import Background from '../components/Background';
import Img from '../components/Logo';
import logo from '../image/logo.png';
import TextShow from '../components/TextShow';
import './LoginPage.scss';

class LoginPage extends Component {
  render() {
    return (
      <Background>
        <div className="enterPage">
          <Img className="logo" src={logo} alt="BookSeller.com" />
          <TextShow />
          
        </div>
      </Background>
    );
  }
}

export default LoginPage;