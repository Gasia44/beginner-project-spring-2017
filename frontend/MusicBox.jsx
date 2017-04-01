import React from 'react';
import { render } from 'react-dom';
import {Draggable, Droppable } from 'react-drag-and-drop'
import Layout from './Layout';

let nm = new Map();
nm.set('2','c#');
nm.set('3','d#');
nm.set('5','f#');
nm.set('6','g#');
nm.set('7','a#');
nm.set('9','c#');
nm.set('0','d#');
nm.set('q','c');
nm.set('w','d');
nm.set('e','e');
nm.set('r','f');
nm.set('t','g');
nm.set('y','a');
nm.set('u','b');
nm.set('i','c');
nm.set('o','d');

export default
class MusicBox extends React.Component{
  constructor(){
    super();
    this.state={
      deltaPosition: {
        x: 0, y: 0
      },
      boxColor:'pink',
      recordingLabel:'Start Recording',
      rec_back:'green' 
    }
    this.startStopRecording = this.startStopRecording.bind(this); 
  }

  componentDidMount() {
  }

  handleDrag(e, s) {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + s.deltaX,
        y: y + s.deltaY,
      }
    });
  }

  startStopRecording() {
    this.props.sr();
    if(this.state.recordingLabel == 'Start Recording'){
      this.setState({
        recordingLabel:'Stop Recording',
        rec_back:'red'
      });
    }else {
       this.setState({
         recordingLabel:'Start Recording',
         rec_back:'green'
       });
    } 
  }; 
  
  onDrop(data) {
      this.setState({boxColor:'magenta'})
      setTimeout(function() { this.setState({boxColor:'pink'}); }.bind(this), 200);
      let notes = data.music.split(' ');
      let counter = 0;
      const timer_id = setInterval(function(){
        if(counter < notes.length){
          tones.play(nm.get(notes[counter]),5);
          counter++;
        } else{
          clearInterval(timer_id);
        }
      }, 500);
      console.log(data.music);  
  }

  /*getTone(letter){
    switch(letter){
      case 2:
        return 'c#';
        break;
      case 3:
        return 'd#';
        break;
      case 5:
        return 'f#';
        break;
      case 6:
        return 'g#';
        break;
      case 7:
        return 'a#';
        break;
      case 9:
        return 'c#';
        break;
      case 0:
         return 'd#';
        break;

      case 'q':
         return 'c';
        break;
      case 'w':
         return 'd';
        break; 
      case 'e':
         return 'e';
        break; 
      case 'r':
         return 'f';
        break; 
      case 't':
         return 'g';
        break; 
      case 'y':
         return 'a';
        break; 
      case 'u':
         return 'b';
        break; 
      case 'i':
         return 'c';
        break; 
      case 'o':
         return 'd';
        break; 
      default: 
        break;  
    }
  };*/

 render() {
  const rec_button_style = {
    position:'relative',
    marginLeft:'35%',
    backgroundColor:this.state.rec_back 
  }

  const {deltaPosition} = this.state;

  const div_style = {
    width:'20%',
    height:'75%',
    backgroundColor:'white',
    border:'2px solid black',
    borderRadius: '5px',
    float:'right',
    position:'relateve'
  };

  const div_element_style = {
    width:'100%',
    height:'35px',
    backgroundColor:'turquoise',
    border:'1px solid black',
    borderRadius: '2px',
    textAlign:'center',
    float:'left',
    position:'relateve'
  };

  const div_box_style = {
    width:'50%',
    height:'100px',
    backgroundColor:this.state.boxColor,
    border:'2px solid black',
    borderRadius: '15px',
    left:'20%',
    textAlign:'center',
    position:'absolute'
  };

  return (
    <div>
      <div style={div_style}>

          <button style={rec_button_style} onClick={ this.startStopRecording }>{ this.state.recordingLabel }</button>

          <Draggable type="music" data={this.props.p_data.music_one}
            style={div_element_style}>
            drag music1
          </Draggable>

          <Draggable type="music" data={this.props.p_data.music_two}

            style={div_element_style}>
            drag music2
          </Draggable>

          <Draggable type="music" data={this.props.p_data.music_tree}

            style={div_element_style}>
            drag music3
          </Draggable>

          <Draggable type="music" data={this.props.p_data.music_four}

            style={div_element_style}>
            drag music4
          </Draggable>

          <Draggable type="music" data={this.props.p_data.music_five}

            style={div_element_style}>
            drag music5
          </Draggable>

        </div>

          <Droppable types={['music']}   //allowed drop types
            onDrop={this.onDrop.bind(this)}
            style={div_box_style}>
             #########  DROP HERE  #########
          </Droppable>
    </div>
    );
  }
};
