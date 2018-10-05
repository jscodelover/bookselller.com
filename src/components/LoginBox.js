import React from 'react';
import { Route } from 'react-router-dom';

import Background from './Background';
import Img from './Logo';
import logo from '../image/logo.png';
import TextShow from './TextShow';
import Button from './Button';
import DivFlex from './DivFlex';
import './EntryPage.scss';
import Home from '../container/Home';

export default function LoginPage(props){
  const goToHomeAsGuest = () => {
    props.history.push('/home');
    console.log(props)
  }
  const loginBox = () => {
    props.history.push('/bookseller/login');
  }
  return (
    <Background>
      <DivFlex className="entry-section">
        <Img className="logo" src={logo} alt="BookSeller.com" />
        <TextShow />
        <DivFlex className="btn-section">
          <Button onClick={goToHomeAsGuest}>Guest</Button>
          <Button onClick={loginBox}>Login/SignUp</Button>
        </DivFlex>  
      </DivFlex>
      <Route path='/bookseller/login' component={Home}/>
    </Background>
  );
}
