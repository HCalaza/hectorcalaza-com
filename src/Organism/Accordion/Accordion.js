import React, { Component } from "react";
import Collapse, { Panel } from 'rc-collapse';
import './Accordion.css';
import moreOpt from '../../img/ic/ic_moreOpt.svg';
import close from '../../img/ic/ic_close.svg';
import ButtonSecondary from "../../Atoms/Button/ButtonSecondary.js"
import ButtonTertiary from "../../Atoms/Button/ButtonTertiary.js"


function random() {
  return parseInt(Math.random() * 10, 10) + 1;
}

class Accordion extends React.Component {
  state = {
    time: random(),
    accordion: false,
    activeKey: ['0'],
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey,
    });
  }

  getItems() {
    const items = [];

    // 1 Secciones 0-N
      // 2 Subsecciones 1-N
      // -- > (Solo "crear apartado si layout tipo3")
        // 3 Apartados 0-N

    items = [
      {
        sectionName: "Sección 1 (sin subsecciones)",
        subsections: [
          {
            subsectionName: "Subsección 1-1"
          }
        ]
      },
      {
        sectionName: "Sección 2 (con subsecciones pero sin apartados)",
        subsections: [
          {
            subsectionName: "Subsección 2-1"
          },
          {
            subsectionName: "Subsección 2-2"
          }
        ]
      },
      {
        sectionName: "Sección 3 (con subsecciones y con apartados)",
        subsections: [
          {
            subsectionName: "Subsección 3-1"
          },
          {
            subsectionName: "Subsección 3-2",
            subsections: [
              {
                subsectionName: "Apartado 3-2-1"
              },
              {
                subsectionName: "Apartado 3-2-2"
              }
            ]
          }
        ]
      }
    ];

    // Compose item container
    const resultMap = items.map((item, index) => {
      // Si es una seccion sin subsecciones...
      if(item.subsections.length == 1) {
        return (
          <Panel header={<p className='subtitleOne'> {item.sectionName } </p>} key="{index}" extra={  <img src={moreOpt} className="icon" alt="moreOptions" />}>
           <Collapse>
             <Panel header={<p className='subtitleOne'> {item.subsections.subsectionName }</p>} key="{index + '-1'}" id="header-test" extra={  <img src={moreOpt} className="icon" alt="moreOptions" />}>
               <div className='buttonWrapper'>
                 <ButtonTertiary buttonText="Añadir apartado"/>
               </div>
             </Panel>
             <div className='buttonWrapper'>
             <ButtonSecondary buttonText="Añadir subsección"/>
             </div>
           </Collapse>
         </Panel>
       )
      }

      // Si es una seccion con subsecciones sin apartados...

        // Si es una seccion con subsecciones y apartados...
    });

    // items.push(
    //   <Panel header={<p className='subtitleOne'> Sección | Section | Partie </p>} key="1"extra={  <img src={moreOpt} className="icon" alt="moreOptions" />}>
    


    //     <Collapse>

    
    //       <Panel header={<p className='subtitleOne'>Subsección</p>} key="1" id="header-test" extra={  <img src={moreOpt} className="icon" alt="moreOptions" />}>
    //         <p className='subtitleOne'><a href="">Apartado</a></p>
    //         <p className='subtitleOne'><a href="">Apartado</a></p>
    

    //         <div className='buttonWrapper'>
    //           <ButtonTertiary buttonText="Añadir apartado"/>
    //         </div>
    

    //       </Panel>
    //     </Collapse>



    //     <Collapse>
    //       <Panel header={<p className='subtitleOne'> Subsección</p>} key="2" id="header-test" extra={  <img src={moreOpt} className="icon" alt="moreOptions" />}>
    //           <p className='subtitleOne'><a href="">Apartado</a></p>
    //           <div className='buttonWrapper'>
    //             <ButtonTertiary buttonText="Añadir apartado"/>
    //           </div>
    //       </Panel>
    //     </Collapse>
    //     <div className='buttonWrapper'>
    //     <ButtonSecondary buttonText="Añadir subsección"/>
    //     </div>
    //   </Panel>
    // );

    // items.push(
    //   <Panel header={<p className='subtitleOne'> Sección | Section | Partie </p>} key="2"extra={  <img src={moreOpt} className="icon" alt="moreOptions" />}>
    //     <Collapse >
    //       <Panel header={<p className='subtitleOne'> Subsección</p>} key="1" id="header-test" extra={  <img src={moreOpt} className="icon" alt="moreOptions" />}>
    //         <div className='buttonWrapper'>
    //           <ButtonTertiary buttonText="Añadir apartado"/>
    //         </div>
    //       </Panel>
    //       <div className='buttonWrapper'>
    //       <ButtonSecondary buttonText="Añadir subsección"/>
    //       </div>
    //     </Collapse>
    //   </Panel>
    // );


    // items.push(
    //   <Panel header={<p className='subtitleOne'> Sección | Section | Partie </p>} key="3" extra={  <img src={moreOpt} className="icon" alt="moreOptions" />}>
    //     <Collapse>
    //       <Panel header={<p className='subtitleOne'> Subsección</p>} key="1" id="header-test" extra={  <img src={moreOpt} className="icon" alt="moreOptions" />}>
    //         <div className='buttonWrapper'>
    //           <ButtonTertiary buttonText="Añadir apartado"/>
    //         </div>
    //       </Panel>
    //       <div className='buttonWrapper'>
    //       <ButtonSecondary buttonText="Añadir subsección"/>
    //       </div>
    //     </Collapse>
    //   </Panel>
    // );

    return resultMap;
  }

  setActivityKey = () => {
    this.setState({
      activeKey: ['2'],
    });
  }

  reRender = () => {
    this.setState({
      time: random(),
    });
  }

  toggle = () => {
    this.setState({
      accordion: !this.state.accordion,
    });
  }

  render() {
    const accordion = this.state.accordion;
    const btn = accordion ? 'Mode: accordion' : 'Mode: collapse';
    const activeKey = this.state.activeKey;
    return (<div style={{ margin: 20, width: 400 }}>

      <Collapse
        accordion={accordion}
        onChange={this.onChange}
        activeKey={activeKey}
      >
        {this.getItems()}
      </Collapse>
    </div>);
  }
}

export default Accordion
