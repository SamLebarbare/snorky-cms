import React, { Component } from "react";
import Tab from "./Tab.js";
class TopNav extends Component {
  render() {
    return (
      <div className="hero-head">
        <div className="container">
          <div className="tabs is-centered">
            <ul>
              <Tab text="Pensées du jour" icon="thumbtack" />
              <Tab text="Boutique" icon="shopping-bag" />
              <Tab text="Personnages" icon="child" />
              <Tab text="🦄 Licorne" />
              <Tab text="Archives" icon="archive" />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
