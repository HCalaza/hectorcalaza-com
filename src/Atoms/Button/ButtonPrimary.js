import React, { Component } from "react";
import './ButtonPrimary.css';

class ButtonPrimary extends Component {
  constructor (props){
    super (props);
    this.state = {
      buttonText: this.props.buttonText,
    }
  }
  render() {
  return (
      <button className="ButtonPrimaryStyle" name="search" type="button"><span className="ButtonTextPrimary">{this.state.buttonText}</span></button>
  );
}
}
export default ButtonPrimary;
