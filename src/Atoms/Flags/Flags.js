import React, { Component } from "react";
import "./Flags.css";
import spanish from "../../img/ic/ic_spanish.svg";
import french from "../../img/ic/ic_french.svg";
import english from "../../img/ic/ic_english.svg";




class Flags extends Component {

  render() {
  return (
    <div className="languageChoice">
      <img src={spanish} className="iconSpanish" alt="spanish" />
      <img src={english} className="iconEnglish" alt="english" />
      <img src={french} className="iconFrench" alt="french" />
  </div>





  );
}}
export default Flags;
