import React, { Component } from "react";
import "./App.css";
import Accordion from './Organism/Accordion/Accordion.js'



{/*
  import BlockText from "./Mols/BlockText/BlockText.js"
  import ElementCreator from './Organism/ElementCreator/ElementCreator.js'
  import ImgWideLeft from "./Mols/ImgBlock/imgWideLeft.js"
import BulletBuilderXL from "./Organism/BulletBuilderXL/BulletBuilderXL.js"
import LinkedinBuilderSM from "./Organism/LinkedinBuilderSM/LinkedinBuilderSM.js"
import LinkedinBuilderXL from "./Organism/LinkedinBuilderXL/LinkedinBuilderXL.js"
import ImgWideLeft from "./Mols/ImgBlock/imgWideLeft.js"
import Header from "./Mols/Header/header.js"
import ButtonPrimary from "./Atoms/Button/ButtonPrimary.js"
import ButtonSecondary from "./Atoms/Button/ButtonSecondary.js"
import TextArea from "./Atoms/TextArea/TextArea.js"
import Input from "./Atoms/Input/Input.js"
import Nav from "./Mols/NavBar/Nav.js"
import ListItem from "./Mols/ListItem/ListItem.js"
import LinkedinHeader from "./Mols/LinkedinHeader/LinkedinHeader.js"
*/}

function App() {
  return (
    <div className="App">
      <div>
        <Accordion />
      </div>



      {/*
        <ElementCreator size='XL' />
        <ElementCreator size='SM' />
        <FormBuilder wrapper='XL' />
        <imgWideLeft/>
        <LinkedinBadgeListItem />
        <FormBuilder />
        <ImgWideLeft />
        <Header />
        <Subheader sectionName="Nombre del proyecto" dates="Enero 2020 - Marzo 2020" />
      <Nav tab1="Sección 1" path1="" tab2="sección 2" path2="" tab3="Sección 3" path3=""/>
      <Input label="Dime tu nombre" placeholder="Por ejemplo Pedro" errorMssg=""/>
      <Input label="Dime tu nombre" placeholder="Por ejemplo Pedro" errorMssg=""/>
      <TextArea label="¿Qué me quieres comentar?" placeholder="Quiero decirte que..." errorMssg="" />
      <ButtonPrimary buttonText="Button Text"/>
      <ButtonSecondary buttonText="Button Text"/>
      <BlockText title="" leftBlock="" rightBlock=""/>
      */}
    </div>

  );
}

export default App;
