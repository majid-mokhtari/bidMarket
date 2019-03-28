import React, { Component } from "react";
import { Pagination } from "antd";

class Pag extends Component {
  onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  render() {
    return (
      <Pagination
        showSizeChanger
        onShowSizeChange={this.onShowSizeChange}
        onChange={next => this.props.changePage(next)}
        defaultCurrent={1}
        total={100}
        className="pagination"
      />
    );
  }
}

export default Pag;
