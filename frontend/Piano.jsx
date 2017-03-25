import React from 'react';
import { render } from 'react-dom';
import keydown, { Keys, keydownScoped } from 'react-keydown';

const KEYS = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                 'n','o','p','q','r','s','t','u','v','w','x','y','z',
                      '1','2','3','4','5','6','7','8','9'];



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
       case "s": tones.play('c#');;break;
       case "d": tones.play('d#');;break;
       case "g":tones.play('f#');;break;
       case "h": tones.play('g#');;break;
       case "j": tones.play('a#');;break;
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
      height:'45%',
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
        case "z": tones.play('c');;break;
        case "x": tones.play('d');;break;
        case "c":tones.play('e');;break;
        case "v": tones.play('f');;break;
        case "b": tones.play('g');;break;
        case "n": tones.play('a');;break;
        case "m": tones.play('b');;break;
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
      height:'80%',
      backgroundColor:this.state.b_g_color,
      border:'2px solid black',
      float:'left'
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
      display:'flex',
      justifyContent:'center',
      position:'absolute',
      bottom:'0',
      backgroundColor:'red',
      width:'100%',
      height:'230px',
      margin:'auto'
    };

    return(
      <div style={bottom_style}>

        <div>

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

        </div>

      </div>
    );
  };
}
