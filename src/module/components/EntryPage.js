import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Background from '../../components/Background';
import Img from '../../components/Logo';
import logo from '../image/logo.png';
import TextShow from './TextShow';
import Button from '../../components/Button';
import DivFlex from '../../components/DivFlex';
import './EntryPage.scss';
import LoginBox from './LoginBox';

class LoginPage extends Component{
  constructor(props){
    super(props);
    this.state = {
    }  
  }
  goToHomeAsGuest = () => {
    this.props.history.push('/home');
  }
  loginBox = () => {
    this.props.history.push('/bookseller/login');
  }
  isDisplay = () => {
    this.props.history.goBack();
  }
  render(){
    console.log(this.state.show)
    return (
      <Background>
        <DivFlex className="entry-section">
          <Img className="logo" src={logo} alt="BookSeller.com" />
          <TextShow />
          <DivFlex className="btn-section">
            <Button onClick={this.goToHomeAsGuest}>Guest</Button>
            <Button onClick={this.loginBox}>Login/SignUp</Button>
          </DivFlex>  
        </DivFlex>
        <Route path='/bookseller/login' render={() => <LoginBox removeLoginBox={this.isDisplay}/> } />
      </Background>
    );
  }  
}

export default LoginPage;