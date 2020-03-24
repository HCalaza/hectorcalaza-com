import React, { Component } from "react";
import "./Input.css";

class InputText extends Component {
  constructor (props) {
    super (props);
    this.state = {
      placeholder: this.props.placeholder,
      label: this.props.label,
      errorMssg: this.props.errorMssg
    }
  }
  render() {
  return (
    <div className="inputForm">
    <p className="FormLabel">{this.state.label}</p>
     <input className="InputField" type="text" name="firstname" placeholder ={this.state.placeholder}/>
    <p className="errorMssg">{this.state.errorMssg}</p>
   </div>
  );
}
}
export default InputText;
