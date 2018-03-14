import React, { Component } from "react";
import "./App.css";
import TopNav from "./TopNav.js";
import Front from "./Front.js";
import BotNav from "./BotNav.js";

class App extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-white">
        <TopNav />
        <Front />
        <BotNav />
      </section>
    );
  }
}

export default App;
