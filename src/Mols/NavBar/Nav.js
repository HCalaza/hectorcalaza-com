import React, { Component } from 'react';
import './Nav.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
//
class Nav extends Component {
render() {
  return (
    <Router>
      <div className="content">
        <nav className="navBar">
          <ul className="mainMenu">
              {/* En el to="" poner la etiqueta que va a aparecer en la URL, por ej "/contentlist" */}
            <NavLink to={this.props.path1} className="menuElement" activeClassName="menuElementActive">
              <li className="textLink"><h2>{this.props.tab1}</h2></li>
            </NavLink>

            <NavLink to={this.props.path2} className="menuElement" activeClassName="menuElementActive">
              <li className="textLink"><h2>{this.props.tab2}</h2></li>
            </NavLink>
            
            <NavLink to={this.props.path3} className="menuElement" activeClassName="menuElementActive">
              <li className="textLink"><h2>{this.props.tab3}</h2></li>
            </NavLink>

          </ul>
        </nav>

        <Switch>

          <Route exact path={this.props.path1}>
            {/* <WrapperList /> */}
          </Route>
          <Route path={this.props.path2}>
            {/* <WrapperForm /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}}

export default Nav;
