import React, { Component } from 'react';
import './TextBlockBuilder.css';
import '../../Mols/Wrapper/Wrapper.css'
import Input from "../../Atoms/Input/Input.js"
import Flags from "../../Atoms/Flags/Flags.js"
import close from "../../img/ic/ic_close.svg";
import TextArea from "../../Atoms/TextArea/TextArea.js"


class TextBlockBuilder extends Component {
render() {
  return (
        <div className="WrapperXL">
          <div className="iconsRow">
            <Flags />
            <img src={close} className="icon" alt="close" />
          </div>

        <div className="textBlockInputs">
            <Input label="Título" placeholder="Ej." />
          
            <div className="columnsText">
              <TextArea label="Cuerpo de texto" placeholder="Ej."/>
              <span className="emptySpace"></span>
              <TextArea label="Cuerpo de texto" placeholder="Ej."/>
            </div>

        </div>

        </div>

  );
}}

export default TextBlockBuilder;
