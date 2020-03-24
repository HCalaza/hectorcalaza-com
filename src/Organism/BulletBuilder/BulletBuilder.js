import React, { Component } from 'react';
import './BulletBuilder.css';
import '../../Mols/Wrapper/Wrapper.css'
import Input from "../../Atoms/Input/Input.js"
import Flags from "../../Atoms/Flags/Flags.js"
import close from "../../img/ic/ic_close.svg";
import ListItem from "../../Mols/ListItem/ListItem.js"
import TextArea from "../../Atoms/TextArea/TextArea.js"
import ButtonSecondary from "../../Atoms/Button/ButtonSecondary.js"


class BulletBuilder extends Component {
render() {
  return (
        <div className={'Wrapper' + this.props.wrapper}>
          <div className="iconsRow">
            <Flags />
            <img src={close} className="icon" alt="close" />
          </div>
        <ListItem />

        <div className="bulletsInput">
            <Input label="Título" placeholder="Ej." />
            <Input label="Subtítulo" placeholder="Ej." />
            <Input label="Fechas" placeholder="Ej." />
            <Input label="Nombre de la empresa" placeholder="Ej. Google" />
            <TextArea label="Cuerpo de texto" placeholder="Ej."/>
            <div className="buttonArea">
            <ButtonSecondary buttonText="Button Text"/>
            </div>

        </div>

        </div>









  );
}}

export default BulletBuilder;
