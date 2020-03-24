import React, { Component } from 'react';
import "./imgWideLeft.css"
import ImgWrapper from "../../Atoms/ImgWrapper/ImgWrapper.js"

class ImgWideLeft extends Component {

render() {
  return (
    <div className="imgBlock">
      <ImgWrapper className="leftSide" source="" alt="" scope='Backoffice' size='M'/>
      <ImgWrapper className="rightSide" source="" alt="" scope='Backoffice' size='S'/>


    </div>






  );
}}

export default ImgWideLeft;
