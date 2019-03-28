import React, { Component } from "react";
import Projects from "./projects";
import Header from "./header";
import Footer from "./footer";
import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nextPage: 1
    };
  }
  render() {
    const { nextPage } = this.state;
    return (
      <div className="app-container">
        <Header />
        <Projects nextPage={nextPage} />
        <Footer changePage={nextPage => this.setState({ nextPage })} />
      </div>
    );
  }
}

export default App;
