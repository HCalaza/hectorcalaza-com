import React, { Component } from 'react';
import './LinkedinBuilder.css';
import '../../Mols/Wrapper/Wrapper.css'

import LinkedinHeader from '../../Mols/LinkedinHeader/LinkedinHeader.js'
import Input from '../../Atoms/Input/Input.js'
import Flags from '../../Atoms/Flags/Flags.js'
import close from '../../img/ic/ic_close.svg';
import TextArea from '../../Atoms/TextArea/TextArea.js'


class LinkedinBuilder extends Component {
render() {
  return (
        <div className={'Wrapper' + this.props.wrapper}>
          <div className='iconsRow'>
            <Flags />
            <img src={close} className='icon' alt='close' />
          </div>
          <LinkedinHeader />

          <div className='PersonalData'>
            <Input label='URL de la foto de Linkedin' placeholder='http://...' />
            <Input label='Nombre de la persona' placeholder='Ej. John Doe' />
            <Input label='Puesto de trabajo' placeholder='Ej. UX Designer' />
            <Input label='Nombre de la empresa' placeholder='Ej. Google' />
            {this.props.wrapper === 'XL' && <TextArea label='Comentario' placeholder = 'He trabajado con...'  />}        

          </div>


        </div>









  );
}}

export default LinkedinBuilder;
