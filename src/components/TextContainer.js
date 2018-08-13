import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      color: props.color,
      font: props.font,
      size: props.size
    }
    this.updateText=this.updateText.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps)
    this.setState(nextProps)
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="textContainer">
        <textarea 
          style={{color: this.state.color, fontFamily: this.state.font, fontSize: this.state.size}}
          onChange={this.updateText}
          value={this.state.text} 
          placeholder='Start typing your thoughts here!'
          cols="90"
          rows="30">
        </textarea>
      </div>
    )
  }
}




