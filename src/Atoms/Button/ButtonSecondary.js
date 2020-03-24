import React, { Component } from "react";
import './ButtonSecondary.css';

class ButtonSecondary extends Component {
  constructor (props){
    super (props);
    this.state = {
      buttonText: this.props.buttonText,
    }
  }
  render() {
  return (
      <button className="ButtonSecondaryStyle" name="search" type="button"><span className="ButtonTextSecondary">{this.state.buttonText}</span></button>
  );
}
}
export default ButtonSecondary;
