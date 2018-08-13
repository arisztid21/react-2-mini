import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "magenta",
      size: 12,
      family: "monospace"
    }
    this.updateColor=this.updateColor.bind(this);
    this.updateSize=this.updateSize.bind(this);
    this.updateFamily=this.updateFamily.bind(this)
  }

  updateColor(val) {
    this.setState({
      color: val
    })
  }

  updateSize(val) {
    this.setState({
      size: val
    })
  }

  updateFamily(val) {
    this.setState({
      family: val
    })
  }

  // updateEditStatus

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="headerBar">
          <EditToggle/>
          <ColorChanger newColor={this.updateColor}/>
          <SizeChanger newSize={this.updateSize}/>
          <FamilyChanger newFont={this.updateFamily}/>
        </div>
        <div className="textArea">
          <TextContainer 
          color={this.state.color}
          font={this.state.family}
          size={this.state.size}/>
        </div>
      </div>
    )
  }
}

export default App;
