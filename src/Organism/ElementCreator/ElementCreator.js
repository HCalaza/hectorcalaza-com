import React, { Component } from 'react';
import './ElementCreator.css';
import '../../Mols/Wrapper/Wrapper.css'
import add from '../../img/ic/ic_add.svg';


class ElementCreator extends Component {
render() {
  return (
        <div className={'size' + this.props.size}>

          <div className="elementCreator">
            <img src={add} alt='add'/>
            <p className="subtitleOne">Añadir elemento</p>
          </div>

        </div>

  );
}}

export default ElementCreator;
