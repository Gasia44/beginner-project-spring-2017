import React, {Component} from 'react';
import {render} from 'react-dom';

import Header from './Header'


export default class Layout extends Component{
  constructor(){
    super()
    this.state = {colorText:'',
                  score:0,
                  highScore:0
                }
    this.pushRed = this.pushRed.bind(this);
    this.pushBlue = this.pushBlue.bind(this);
    this.pushOrange = this.pushOrange.bind(this);
    this.pushGreen = this.pushGreen.bind(this);
    this.pushPink = this.pushPink.bind(this);
    this.pushBlack = this.pushBlack.bind(this);
    this.pushPurple = this.pushPurple.bind(this);

    this.createRandomNum = this.createRandomNum.bind(this);
    this.sayColor = this.sayColor.bind(this);
    this.checkTruth = this.checkTruth.bind(this);

    this.playNote = this.playNote.bind(this);
  }

  playNote(color) {
       console.log(color);
       switch (color) {
         case "RED": tones.play('c');;break;
         case "BLUE": tones.play('d');;break;
         case "ORANGE":tones.play('e');;break;
         case "GREEN": tones.play('f');;break;
         case "PINK": tones.play('g');;break;
         case "BLACK": tones.play('a');;break;
         case "PURPLE": tones.play('b');;break;
         default:
       }
     }

  pushRed(){
  console.log("pushRed");
  this.checkTruth("RED");
  }
  pushBlue(){
  console.log("pushBlue");
  this.checkTruth("BLUE");
  }
  pushOrange(){
  console.log("pushOrange");
  this.checkTruth("ORANGE");
  }
  pushGreen(){
  console.log("pushOrange");
  this.checkTruth("GREEN");
  }
  pushPink(){
  console.log("pushOrange");
  this.checkTruth("PINK");
  }
  pushBlack(){
  console.log("pushOrange");
  this.checkTruth("BLACK");
  }
  pushPurple(){
  console.log("pushOrange");
  this.checkTruth("PURPLE");
  }


  createRandomNum(){
    var min = Math.ceil(1);
    var max = Math.floor(8);
    var rundomNum = Math.floor(Math.random() * (max - min)) + min;
    console.log("createRandomNum = " + rundomNum);
    return this.sayColor(rundomNum);
  }


  sayColor(num){
    switch (num) {
      case 1: this.setState({colorText: "RED"});break;
      case 2: this.setState({colorText: "BLUE"});break;
      case 3: this.setState({colorText: "ORANGE"});break;
      case 4: this.setState({colorText: "GREEN"});break;
      case 5: this.setState({colorText: "PINK"});break;
      case 6: this.setState({colorText: "BLACK"});break;
      case 7: this.setState({colorText: "PURPLE"});break;
      default:
    }
  }

  checkTruth(color){
    if(color == this.state.colorText){
      this.setState({score: this.state.score + 1});
      this.playNote(color);
      this.createRandomNum();
    }
    else {
      console.log("False");

      tones.play('b',0);
      tones.play('b',1);
      tones.play('b',2);
      tones.play('b',3);
      tones.play('b',4);
      tones.play('b',5);
      tones.play('b',6);
      tones.play('b',7);
      tones.play('b',8);
      tones.play('b',9);

      this.setState({score: 0});
      if(this.state.highScore < this.state.score){
        this.setState({highScore: this.state.score});
      }
      this.createRandomNum();
    }
  }

  componentDidMount() {
      console.log('componentDidMount');
      this.createRandomNum();
  }


  render(){

    const headerStyle = {
      margin:'0px 0px 0px 200px',
      width:'700px',
      height:'100px',
      backgroundColor:'white',
      float:'left',
      borderStyle: 'solid',
      float: 'top',
      textAlign:'center',
      lineHeight: '90px'
    };

    const scoreStyle = {
      fontSize:'24px',
      position: 'absolute',
      float:'left'
    };

    const highScoreStyle = {
      fontSize:'24px',
      position: 'absolute',
      float:'left',
      marginTop:'50px'
    };

    const bigStyle = {
      margin:'0px 0px 0px 200px'
    };

    const c_style = {
      width:'100px',
      height:'100px',
      backgroundColor:'red',
      float: 'left'
    };
    const d_style = {
      width:'100px',
      height:'100px',
      backgroundColor:'blue',
      float:'left'
    };
    const e_style = {
      width:'100px',
      height:'100px',
      backgroundColor:'orange',
      float:'left'
    };
    const f_style = {
      width:'100px',
      height:'100px',
      backgroundColor:'green',
      float: 'left'
    };
    const g_style = {
      width:'100px',
      height:'100px',
      backgroundColor:'pink',
      float:'left'
    };
    const a_style = {
      width:'100px',
      height:'100px',
      backgroundColor:'black',
      float:'left'
    };
    const b_style = {
      width:'100px',
      height:'100px',
      backgroundColor:'purple',
      float:'left'
    };
    return(
      <div>
        <Header />
        <div style = {scoreStyle}>Score = {this.state.score}</div>
        <div style = {highScoreStyle}>Record is = {this.state.highScore}</div>
        <div style = {headerStyle}>{this.state.colorText}</div>
        <div style = {bigStyle}>
              <div style = {c_style} onClick = {this.pushRed} ></div>
              <div style = {d_style} onClick = {this.pushBlue}></div>
              <div style = {e_style} onClick = {this.pushOrange}></div>
              <div style = {f_style} onClick = {this.pushGreen}></div>
              <div style = {g_style} onClick = {this.pushPink}></div>
              <div style = {a_style} onClick = {this.pushBlack}></div>
              <div style = {b_style} onClick = {this.pushPurple}></div>
        </div>
      </div>
    );
  }
}
