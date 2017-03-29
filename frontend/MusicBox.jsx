import React from 'react';
import { render } from 'react-dom';
import {Draggable, Droppable } from 'react-drag-and-drop'
import Layout from './Layout';

export default
class MusicBox extends React.Component{
  constructor(){
    super();
    this.state={
      deltaPosition: {
        x: 0, y: 0
      }
    }
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

  Drop(data) {
        console.log(data)
    }

render() {
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
    backgroundColor:'pink',
    border:'2px solid black',
    borderRadius: '15px',
    left:'20%',
    textAlign:'center',
    position:'absolute'
  };

  return (
    <div>
      <div style={div_style}>

          <Draggable type="music" data="music1"
            style={div_element_style}>
            drag music1
          </Draggable>

          <Draggable type="music" data='music2'
            style={div_element_style}>
            drag music2
          </Draggable>

          <Draggable type="music" data="music3"
            style={div_element_style}>
            drag music3
          </Draggable>

          <Draggable type="music" data="music4"
            style={div_element_style}>
            drag music4
          </Draggable>

          <Draggable type="music" data="music5"
            style={div_element_style}>
            drag music5
          </Draggable>

        </div>

          <Droppable types={['music']}   //allowed drop types
            Drop={this.Drop.bind(this)}
            style={div_box_style}>
             ######### ######### DROP HERE ######### #########
          </Droppable>
    </div>
    );
  }
};
