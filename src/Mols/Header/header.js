import React, { Component } from "react";
import logo from "../../img/logoHectorCalaza.svg";
import menu from "../../img/ic/ic_menu.svg";
import Flags from "../../Atoms/Flags/Flags.js"
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="App-header">
          <img src={menu} className="icon" alt="burgerMenu" />
          <img src={logo} className="App-logo" alt="logo" />
          <Flags />
        </header>
    </div>

    );
  }
}

export default Header;
