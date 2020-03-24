import React, { Component } from 'react';
import './Subheader.css';
import back from "../../img/ic/ic_back.svg";
//
class Subheader extends Component {
render() {
  return (
      <div className="subheader">
        <nav className="subHeaderBar">
            <ul className="navSection" >
              <li><a className="backLink"><img src={back} className="icon" alt="Back icon" /></a></li>
              <li className="sectionText"><h1>{this.props.sectionName}</h1></li>
              <li className="sectionText"><p>{this.props.dates}</p></li>
            </ul>
        </nav>
      </div>
  );
}}

export default Subheader;
