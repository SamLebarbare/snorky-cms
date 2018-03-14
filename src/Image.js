import React, { Component } from "react";

class Image extends Component {
  render() {
    const { image } = this.props;
    return (
      <figure className="image is-4by3">
        <img src={image} />
      </figure>
    );
  }
}

export default Image;
