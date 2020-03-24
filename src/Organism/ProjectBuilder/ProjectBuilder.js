import React, { Component } from 'react';
import './ProjectBuilder.css';
import '../../Mols/Wrapper/Wrapper.css'

import LinkedinHeader from '../../Mols/LinkedinHeader/LinkedinHeader.js'
import Input from '../../Atoms/Input/Input.js'
import Flags from '../../Atoms/Flags/Flags.js'
import close from '../../img/ic/ic_close.svg';
import ImgWrapper from '../../Atoms/ImgWrapper/ImgWrapper.js'
import TextArea from '../../Atoms/TextArea/TextArea.js'
import ButtonSecondary from "../../Atoms/Button/ButtonSecondary.js"


class ProjectBuilder extends Component {
render() {
  return (
        <div className={'Wrapper' + this.props.wrapper}>
          <div className='iconsRow'>
            <Flags />
            <img src={close} className='icon' alt='close' />
          </div>
          <div className='projectData'>

              <div className='imgConfigurator'>
                <ImgWrapper source="" alt="" scope='Backoffice' size='L'/>
                <div className='imgForm'>
                  <Input className='imgLoaderForm'label='Escoge la imagen principal' placeholder='Busca en tu ordenador' errorMssg='Proporción de la imagen 1.19:1' />
                  <span className="emptySpace"></span>
                  <ButtonSecondary buttonText="Examinar" className='buttonImg'/>
                </div>
              </div>

              <div className='projectInfo'>
                <Input label='Título' placeholder='Ej. Proyecto 1' />
                <TextArea label='Añade texto explicativo' placeholder='Ej. Fue un proyecto muy bonito' />
                </div>

          </div>



        </div>









  );
}}

export default ProjectBuilder;
