import React, { Component } from 'react';

import './LoginBox.scss';
import BackDrop from '../../components/BackDrop';
import Button from '../../components/Button';

class LoginBox extends Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <BackDrop clicked={this.props.removeLoginBox}></BackDrop>   
                <div className="box">
                    <Button><span></span>testing</Button>
                    <Button>testing</Button>
                </div>
            </div>    
        );
    }
}

export default LoginBox;