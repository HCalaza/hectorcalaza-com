import React, { Component } from 'react';
import './FormBuilder.css';
import '../../Mols/Wrapper/Wrapper.css'
import Input from "../../Atoms/Input/Input.js"
import Flags from "../../Atoms/Flags/Flags.js"
import close from "../../img/ic/ic_close.svg";
import TextArea from "../../Atoms/TextArea/TextArea.js"


class FormBuilder extends Component {
render() {
  return (
        <div className="WrapperXL">
          <div className="iconsRow">
            <Flags />
            <img src={close} className="icon" alt="close" />
          </div>

        <div className="FormBuilderInputs">
            <TextArea label="Añade el texto de entrada" placeholder="Ej."/>
            <Input label="Elige el texto para pedir el nombre" placeholder="Ej." />
            <Input label="Elige el texto para pedir el email" placeholder="Ej." />
            <Input label="Elige el texto para pedir el comentario" placeholder="Ej." />

        </div>

        </div>

  );
}}

export default FormBuilder;
