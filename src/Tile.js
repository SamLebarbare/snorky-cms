import React, { Component } from "react";

class Tile extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="tile is-vertical is-parent flip-container">
        {children}
      </div>
    );
  }
}

export default Tile;
