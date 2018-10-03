import React, { Component } from 'react';

import './TextShow.scss';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.typerwriter = React.createRef();
        this.sentences = [
            "an Engineer. ",
            "an Inventor. ",
            "a Developer. ",
            "a Web Designer. "
          ]
    }
    componentDidMount(){
        this.loop();
    }
    write (obj, sentence, i, cb) {
        if (i != sentence.length) {
          setTimeout(function () {
            i++
            console.log('in timeout', i)
            obj.innerHTML = sentence.substr(0, i+1) +' <em aria-hidden="true"></em>';
            write(obj, sentence, i, cb)
          }, 50)
        } else {
          console.log(i)
          cb()
        }
      }
    erase (obj, cb,i) {
       var sentence = obj.innerText
          if (sentence.length != 0) {
           setTimeout(function () {
           sentence = sentence.substr(0,sentence.length-1)
           console.log('in timeout', i)
           obj.innerText = sentence
           erase(obj, cb)
            }, 18/(i*(i/10000000)))
            } else {
            obj.innerText = " "
            cb()
         }
        }
        var typeline = document.querySelector("#typeline")

     writeerase(obj, sentence, time, cb) {
          write(obj, sentence, 0, function () {
           setTimeout(function () {
           erase(obj, cb) }, time) })
    }


    function loop () {
        var counter = 0;
        var sentence = sentences[counter % sentences.length]
        writeerase(typeline, sentence, 1500, loop)
        counter++
      }
    render() {
        return (
        <div className="textshow">
            <h2 className="" ref={this.typerwriter}> testing ka hs gtrs hsi hsn bsh </h2>
        </div>
        );
    }
}

export default LoginPage;