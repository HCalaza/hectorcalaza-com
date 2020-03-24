import React, { Component } from 'react';
import '../../Mols/Wrapper/Wrapper.css'

import Input from "../../Atoms/Input/Input.js"
import Flags from "../../Atoms/Flags/Flags.js"
import close from "../../img/ic/ic_close.svg";
import TextArea from "../../Atoms/TextArea/TextArea.js"


class ColumnBuilder extends Component {
render() {
  return (
        <div className={'Wrapper' + this.props.wrapper}>
          <div className="iconsRow">
            <Flags />
            <img src={close} className="icon" alt="close" />
          </div>

        <div className="columnNamer">
            <Input label="Nombre de la columna" placeholder="Contenido" />
        </div>

        </div>









  );
}}

export default ColumnBuilder;
