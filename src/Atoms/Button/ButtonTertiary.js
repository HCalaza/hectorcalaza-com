import React, { Component } from "react";
import './ButtonTertiary.css';

class ButtonTertiary extends Component {
  constructor (props){
    super (props);
    this.state = {
      buttonText: this.props.buttonText,
    }
  }
  render() {
  return (
      <button className="ButtonTertiaryStyle" name="search" type="button"><span className="ButtonTextTertiary">{this.state.buttonText}</span></button>
  );
}
}
export default ButtonTertiary;
