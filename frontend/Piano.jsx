import React from 'react';
import { render } from 'react-dom';

import keydown, { Keys, keydownScoped } from 'react-keydown';

const KEYS = ['s','d','g','h','j','l',';',
                'z','x','c','v','b','n','m',',','.','/'];



/***********************BLACK**************************/
class BlackKey extends React.Component {
  constructor(props) {
    super(props);
    this.k_d_handler = this.k_d_handler.bind(this);
    this.state = {
      b_g_color:'black'
    };
  }

   @keydownScoped( KEYS )
  k_d_handler(e) {
   if(this.props.idc == e.key){
     switch (e.key) {
       case "s": tones.play('c#',5);;break;
       case "d": tones.play('d#',5);;break;
       case "g":tones.play('f#',5);;break;
       case "h": tones.play('g#',5);;break;
       case "j": tones.play('a#',5);;break;

       case "l": tones.play('c#',6);;break;
       case ";": tones.play('d#',6);;break;

       default:
     }
     this.setState({
       b_g_color:'orange'
     });
     setTimeout(() => {
         this.setState({
            b_g_color:'black'
         });
       }, 200);
   }
  }

  render(){
    let marginLeft = this.props.marginLeft;

    const div_style = {
      marginLeft: marginLeft,
      marginRight:'10px',
      width:'30px',
      height:'50%',
      backgroundColor:this.state.b_g_color,
      position:'absolute',
    };
    return(
      <div style={div_style}  />
    );
  };
}

/***********************WHITE**************************/
class WhiteKey extends React.Component {
  constructor() {
    super();
    this.k_d_handler = this.k_d_handler.bind(this);
    this.state = {
       b_g_color:'white'
    };
  }

  @keydownScoped( KEYS )
   k_d_handler(e) {
    if(this.props.idc == e.key){
      switch (e.key) {
        case "z": tones.play('c',5);;break;
        case "x": tones.play('d',5);;break;
        case "c":tones.play('e',5);;break;
        case "v": tones.play('f',5);;break;
        case "b": tones.play('g',5);;break;
        case "n": tones.play('a',5);;break;
        case "m": tones.play('b',5);;break;

        case ",": tones.play('c',6);;break;
        case ".": tones.play('d',6);;break;
        case "/": tones.play('e',6);;break;


        default:
      }

      this.setState({
       b_g_color:'orange'
     });
     setTimeout(() => {
         this.setState({
            b_g_color:'white'
         });
       }, 200);
    }
  }

  render(){
    const div_style = {
      width:'45px',
      height:'100%',
      backgroundColor:this.state.b_g_color,
      border:'2px solid black',
      float:'left',
      position:'relateve'
    };
    return(
      <div style={div_style} />
    );
  };
}


/***********************PIANO**************************/
@keydown( KEYS )
export default class Piano extends React.Component {

  render() {
    const bottom_style = {
      position: 'absolute',
       left: '40%',
       bottom:'50px',
    };
    const nots_style = {
      justifyContent:'center',
      position:'relative',
      left:'-30%',
      height:'180px',
    };

    return(
    <div>
      <div style = {bottom_style}>
        <div style={nots_style}>

          <WhiteKey idc='z' {...this.props}/>
          <BlackKey marginLeft = '30px' idc='s' {...this.props}/>
          <WhiteKey idc='x' {...this.props}/>
          <BlackKey marginLeft = '75px' idc='d' {...this.props}/>
          <WhiteKey idc='c' {...this.props}/>
          <WhiteKey idc='v' {...this.props}/>
          <BlackKey marginLeft = '165px' idc='g' {...this.props}/>
          <WhiteKey idc='b' {...this.props}/>
          <BlackKey marginLeft = '210px' idc='h' {...this.props}/>
          <WhiteKey idc='n' {...this.props}/>
          <BlackKey marginLeft = '255px' idc='j' {...this.props}/>
          <WhiteKey idc='m' {...this.props}/>

            <WhiteKey idc=',' {...this.props}/>
            <BlackKey marginLeft = '345px' idc='l' {...this.props}/>
            <WhiteKey idc='.' {...this.props}/>
            <BlackKey marginLeft = '390px' idc=';' {...this.props}/>
            <WhiteKey idc='/' {...this.props}/>

        </div>
      </div>
    </div>
    );
  };
}
