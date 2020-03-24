import React, { Component } from 'react';
import "./ListItem.css"

//
class ListItem extends Component {

render() {
  return (
    <div className="bulletList">
      <ul className="mainList">

    <li  className="bullet">
      <h3>Título</h3>
      <div className="FstLine">
        <p className="companyName">{this.props.companyName}</p>
        <p className="dates">{this.props.dates}</p>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dignissim sapien. Nam sit amet sapien viverra lacus faucibus dictum id non erat. Aliquam volutpat eu turpis in fermentum. Aenean gravida quam ut arcu consectetur, gravida tempus lacus elementum. Donec nec leo quis libero tempus eleifend. Vestibulum vitae lacus nec nisi viverra dapibus.</p>
    </li>
  </ul>
</div>







  );
}}

export default ListItem;
