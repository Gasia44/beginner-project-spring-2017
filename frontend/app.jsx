import React, {Component} from 'react';
import { render } from 'react-dom';

class Keyboard extends Component {
    constructor() {
      super();
      this.playNote = this.playNote.bind(this);
    }
    playNote() {
      tones.play(this.props.nota);
    }
    
    render() {
      const s = {width:'20vh', height:'100vh', color:'green', border:'2px solid black', float:'left'}
      return(
        <div style={s} onClick={this.playNote}>
          Piano goes here
        </div>
    );
  }
}

class Piano extends Component {
  render() {
  const notes = ["c", "d", "e", "f", "g", "a", "b"];
    return (
      <div>
        {notes.map( (note) => <Keyboard key={note} nota={note} />)}
      </div>
    );
  }
}

render((
  <Piano />),
   document.getElementById('container'));
