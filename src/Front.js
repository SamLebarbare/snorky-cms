import React, { Component } from "react";
import Tile from "./Tile.js";
import Article from "./Article.js";
import Image from "./Image.js";

//import img1 from "./articles/1001/1.jpg";

class Front extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-3">
            <div className="tile">
              <Tile>
                <Article
                  title="Ces petites choses qui énervent"
                  subtitle="#story"
                />
              </Tile>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Front;
