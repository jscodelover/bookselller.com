import React, { Component } from 'react';

import './TextShow.scss';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.typerwriter = React.createRef();
        this.displayText = [
            "Want to sell your old book ?",
            "Want to buy second-hand book ?",
            "STOP HERE !!!",
            "Its right place for selling and buying old books."
          ];
        this.counter = 0;  
        this.setTime = [];
    }

    componentDidMount(){
        this.loop();
    }

    componentWillUnmount(){
        clearTimeout(this.setTime[0]);
        clearTimeout(this.setTime[1]);
        clearTimeout(this.setTime[2]);
    }
    write = (obj, sentence, i, cb) =>{
        if (i !== sentence.length) {
            this.setTime[2] = setTimeout(() => {
                i++;
                obj.innerHTML = sentence.substr(0, i+1);
                this.write(obj, sentence, i, cb)
            }, 50)
        } else {
            console.log(i)
            cb()
        }
    }

    erase = (obj, cb,i) => {
        let sentence = obj.innerText
        if (sentence.length !== 0) {
            this.setTime[1] = setTimeout(() => {
                sentence = sentence.substr(0,sentence.length-1)
                obj.innerText = sentence;
                this.erase(obj, cb)
            }, 18/(i*(i/10000000)))
        } else {
            obj.innerText = " "
            cb()
        }
    }

    writeerase = (obj, sentence, time, cb) => {
        this.write(obj, sentence, 0, ()=>{
            this.setTime[0] =  setTimeout(() => { 
                                this.erase(obj, cb) 
                            }, time) 
        })
    }


    loop = () => {
        let sentence = this.displayText[this.counter % this.displayText.length]
        this.writeerase(this.typerwriter.current, sentence, 2000, this.loop)
        this.counter++;
    }
    
      render() {
        return (
            <div className="textshow">
                <span ref={this.typerwriter}></span>
            </div>
        );
    }
}

export default LoginPage;