import React, {Component} from 'react';
import {render} from 'react-dom';



/******************HalfTone***********************/
class HalfTone extends Component{
  constructor(){
    super()
  }

  componentDidMount() {

  }

  render(){
    const halfStyle = {
      width:'30px',
      height:'60px',
      backgroundColor:'white',
      border:'2px solid black',
      position:'absolute',
      left: this.props.positionLeft,
    };

    return(
      <div style = {halfStyle}></div>
    );
  }
}

/******************FullTone***********************/
class FullTone extends Component{
  constructor(){
    super()
  }

  componentDidMount() {

  }

  render(){
    const fullStyle = {
      width:'45px',
      height:'100px',
      backgroundColor:'white',
      border:'2px solid black',
      float:'left',
      position:'relateve',
      zIndex:'-1'
    };
    return(

        <div style = {fullStyle}></div>

    );
  }
}



/******************Notes***********************/
export default class Tune extends Component{
  constructor(){
    super()

  }

  componentDidMount() {

  }

  render(){

    const bigTableStyle = {
      position: 'absolute',
      left: '40%',
      bottom:'190px',
    };

    const notesTableStyle = {
      justifyContent:'center',
      position:'relative',
      left:'-30%',
      height:'180px',
    };

    return(
      <div>
        <div style = {bigTableStyle}>
          <div style = {notesTableStyle}>
            <FullTone />
            <FullTone />
            <FullTone />
            <FullTone />
            <FullTone />
            <FullTone />
            <FullTone />
            <FullTone />
            <FullTone />
            <FullTone />

            <HalfTone positionLeft = "25px"/>
            <HalfTone positionLeft = "75px"/>
            <HalfTone positionLeft = "165px"/>
            <HalfTone positionLeft = "210px"/>
            <HalfTone positionLeft = "255px"/>
            <HalfTone positionLeft = "345px"/>
            <HalfTone positionLeft = "390px"/>
          </div>
        </div>
      </div>


    );
  }
}
