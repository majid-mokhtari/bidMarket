import React, { Component } from 'react'
import { Pagination } from 'antd'

class Pag extends Component {
  onShowSizeChange (current, pageSize) {
    console.log(current, pageSize)
  }
  onPageChange (next) {
    console.log(next)
  }
  render () {
    return (
      <Pagination
        showSizeChanger
        onShowSizeChange={this.onShowSizeChange}
        onChange={this.onPageChange}
        defaultCurrent={1}
        total={100}
        className='pagination'
      />
    )
  }
}

export default Pag
