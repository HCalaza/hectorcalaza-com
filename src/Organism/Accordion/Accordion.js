import React, { Component } from "react";
import Collapse, { Panel } from 'rc-collapse';
import './Accordion.css';
import moreOpt from '../../img/ic/ic_moreOpt.svg';


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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
    items.push(
      <Panel header={<p className='subtitleOne'> Sección | Section | Partie </p>} key="1"extra={  <img src={moreOpt} className="icon" alt="close" />}>
        <Collapse>
          <Panel header={<p className='subtitleOne'> Subsección</p>} key="1" id="header-test" extra={  <img src={moreOpt} className="icon" alt="close" />}>
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header={<p className='subtitleOne'> Subsección</p>} key="2" id="header-test" extra={  <img src={moreOpt} className="icon" alt="close" />}>
          </Panel>
        </Collapse>
      </Panel>
    );

    items.push(
      <Panel header={<p className='subtitleOne'> Sección | Section | Partie </p>} key="2"extra={  <img src={moreOpt} className="icon" alt="close" />}>
        <Collapse >
          <Panel header={<p className='subtitleOne'> Subsección</p>} key="1" id="header-test" extra={  <img src={moreOpt} className="icon" alt="close" />}>
          </Panel>
        </Collapse>
      </Panel>
    );


    items.push(
      <Panel header={<p className='subtitleOne'> Sección | Section | Partie </p>} key="3" extra={  <img src={moreOpt} className="icon" alt="close" />}>
        <Collapse>
          <Panel header={<p className='subtitleOne'> Subsección</p>} key="1" id="header-test" extra={  <img src={moreOpt} className="icon" alt="close" />}>
          </Panel>
        </Collapse>
      </Panel>
    );

    return items;
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
