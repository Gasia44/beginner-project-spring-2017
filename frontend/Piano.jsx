import React from 'react';
import { render } from 'react-dom';
import keydown, { Keys, keydownScoped } from 'react-keydown';

const KEYS = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                 'n','o','p','q','r','s','t','u','v','w','x','y','z',
                      '1','2','3','4','5','6','7','8','9'];


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
    let left_margin = this.props.ln;
    
    const div_style = {
      marginLeft:'10px',
      marginRight:'10px',
      width:'30px',
      height:'45%', 
      backgroundColor:this.state.b_g_color,
      zIndex:'6',
      position:'absolute',
      left:left_margin
    };
    return(
      <div style={div_style}  />
    );
  };
}
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
      border:'2px solid black'
    };
    return(
      <div style={div_style} />
    );
  };
}

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
    const p_style = {
      height:'70px',
      width:'10%'
    };
    return(
      <div style={bottom_style}>    
        <BlackKey ln='13%' idc='w' {...this.props}/>
        <WhiteKey idc='a' {...this.props}/>
         <WhiteKey idc='s' {...this.props}/>
        <WhiteKey idc='d' {...this.props}/>
         <BlackKey ln='23%' idc='e'{...this.props}/> 
         <WhiteKey idc='f'{...this.props}/>
         <WhiteKey idc='g'{...this.props}/>
         <WhiteKey idc='h'{...this.props}/>
          <BlackKey ln='33%' idc='y'{...this.props}/>    
         <WhiteKey idc='j'{...this.props}/>
         <WhiteKey idc='k'{...this.props}/>
         <WhiteKey idc='l'{...this.props}/>
          <BlackKey ln='43%' idc='u'{...this.props}/>      
         <WhiteKey idc='m'{...this.props}/>
         <WhiteKey idc='n'{...this.props}/>
         <WhiteKey idc='x'{...this.props}/>
         <BlackKey ln='53%' idc='i'{...this.props}/>     
         <WhiteKey idc='c'{...this.props}/>
         <WhiteKey idc='v'{...this.props}/>
          <WhiteKey idc='b'{...this.props}/>
           <BlackKey ln='63%' idc='o'{...this.props}/>   
         <WhiteKey idc='1'{...this.props}/>
         <WhiteKey idc='2'{...this.props}/>
          <WhiteKey idc='9'{...this.props}/>
           <WhiteKey idc='8'{...this.props}/>
            <BlackKey ln='73%' idc='p'{...this.props}/>  
           <WhiteKey idc='7'{...this.props}/>
           <WhiteKey idc='3'{...this.props}/>
           <WhiteKey idc='4'{...this.props}/>
           <BlackKey ln='83%' idc='q'{...this.props}/>  
           <WhiteKey idc='6'{...this.props}/>   
      </div>
    );
  };
}


