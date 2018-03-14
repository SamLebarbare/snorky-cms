import React, { Component } from "react";

class BotNav extends Component {
  render() {
    return (
      <div className="hero-foot">
        <div className="container">
          <div className="tabs is-centered">
            <ul>
              <li>
                <a>
                  Made with <div className="has-text-danger">❤ </div>aux pays
                  des Licornes, &copy;2018 Satelittes Anonymes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BotNav;
