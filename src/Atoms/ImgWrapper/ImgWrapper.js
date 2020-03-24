import React, { Component } from 'react';
import "./ImgWrapper.css"

class ImgWrapper extends Component {
  constructor (props) {
    super (props);
    this.state = {
      source: this.props.source,
      alt: this.props.alt,
      scope: this.props.scope,
      size: this.props.size
    }
  }

render() {
  return (
        <div className={'imgWrapper' + this.props.scope + this.props.size}>
            <img className='image' src={this.state.source} alt={this.state.alt} />
        </div>






  );
}}

export default ImgWrapper;
