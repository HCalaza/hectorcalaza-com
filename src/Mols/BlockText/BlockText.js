import React, { Component } from "react";

import "./BlockText.css";

class BlockText extends Component {
  constructor (props){
    super (props);
    this.state = {
      title: this.props.title,
      leftBlock: this.props.leftBlock,
      rightBlock: this.props.rightBlock,
    }
  }
  render() {
  return (
      <div className="BlockText">
        <div className="titleOfBlock"><h3>{this.state.title}</h3></div>
        <div className="bodyText">
            <div className="block"><p>{this.state.leftBlock}</p></div>
            <div className="block"><p>{this.state.rightBlock}</p></div>
        </div>
      </div>
  );
}
}
export default BlockText;
