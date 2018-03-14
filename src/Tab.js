import React, { Component } from "react";

class Tab extends Component {
  render() {
    const { text, icon, action } = this.props;
    return (
      <li onClick={() => action}>
        <a className="is-active">
          {icon ? (
            <span className="icon is-small">
              <i className={`fas fa-${icon}`} />
            </span>
          ) : null}
          <span>{text}</span>
        </a>
      </li>
    );
  }
}

export default Tab;
