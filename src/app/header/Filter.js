import React, { Component } from "react";
import { Input, Radio } from "antd";

const { Search } = Input;

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      filter: "all"
    };
  }
  render() {
    return (
      <div className="header">
        <Search
          placeholder="Search"
          size="large"
          onSearch={v => console.log(v)}
          onChange={({ target }) => console.log(target)}
          style={{ width: "66%", marginRight: "30px" }}
        />
        <div className="filter">
          <label>Show: </label>
          <Radio.Group
            size="large"
            value={this.state.filter}
            onChange={v => this.setState({ filter: v.target.value })}
            style={{ marginLeft: "5px" }}
          >
            <Radio.Button value="all">All</Radio.Button>
            <Radio.Button value="active">Active</Radio.Button>
            <Radio.Button value="expired">Expired</Radio.Button>
          </Radio.Group>
        </div>
      </div>
    );
  }
}

export default Filter;
