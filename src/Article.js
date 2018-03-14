import React, { Component } from "react";

class Article extends Component {
  render() {
    const { title, subtitle, children } = this.props;
    return (
      <article className="tile is-child notification is-primary flipper">
        <div className="front">
          <p className="title has-text-white">{title}</p>
          <p className="subtitle has-text-white">{subtitle}</p>
        </div>
        <div className="back">
          <p className="title has-text-white">#voir</p>
        </div>
      </article>
    );
  }
}

export default Article;
