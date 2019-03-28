import React, { Component } from 'react'
import { Pagination } from 'antd'

class Pag extends Component {
  render () {
    return (
      <Pagination
        showSizeChanger
        onShowSizeChange={this.onShowSizeChange}
        defaultCurrent={1}
        total={100}
        className='pagination'
      />
    )
  }
}

export default Pag
