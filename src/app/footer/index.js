import React, { Component } from "react";
import Pagination from "./Pagination";

class Footer extends Component {
  render() {
    return <Pagination changePage={this.props.changePage} />;
  }
}

export default Footer;
