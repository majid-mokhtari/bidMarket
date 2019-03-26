import React, { Component } from 'react'
import moment from 'moment'
import '../index.css'

class Project extends Component {
  constructor (props) {
    super()
    const { project } = props
    const { bidPrice } = project
    this.state = {
      active: this.isActive(project),
      bidPrice: bidPrice,
      editable: false
    }
    this.timer = setInterval(this.updateStatus.bind(this), 1000)
    this.onSubmitBid = this.onSubmitBid.bind(this)
  }
  onSubmitBid () {
    const { bidPrice } = this.state
    // send request and save the price for current user
    // this.props.saveBidPrice()
    console.log(bidPrice)
    this.setState({ editable: false })
  }
  updateStatus () {
    const { project } = this.props
    const active = this.isActive(project)
    this.setState({ active })
    if (!active) {
      clearInterval(this.timer)
      // stop the timer and lock min bid price
    }
  }
  isActive (project) {
    const { expirationDate } = project
    var now = new Date()
    var expDate = new Date(expirationDate)
    return now.getTime() < expDate.getTime()
  }
  render () {
    const { active, bidPrice, editable } = this.state
    const { project } = this.props
    return (
      <div className='gallery-item'>
        <div>
          <p>
            <label>Active: </label>
            <span
              className={`project-status-${active ? 'active' : 'inactive'}`}
            >
              {active ? 'Yes' : 'No'}
            </span>
          </p>
        </div>
        <div>
          <p>
            <label>Expires At: </label>
            {moment(project.expirationDate).format('MMMM Do YYYY, h:mm a')}
          </p>
        </div>
        <div>
          <label htmlFor='bidPrice'>Lowest Bid: $</label>
          <input
            id='bidPrice'
            disabled={!editable || !active}
            value={`${bidPrice}`}
            onChange={e => this.setState({ bidPrice: e.target.value })}
            ref='bidPrice'
          />
        </div>
        <div>
          <button
            style={{ display: editable && active ? 'block' : 'none' }}
            className='button'
            type='submit'
            onClick={this.onSubmitBid}
          >
            {' '}
            Submit
          </button>
          <button
            style={{ display: !editable && active ? 'block' : 'none' }}
            className='button'
            type='submit'
            onClick={() => this.setState({ editable: true })}
          >
            {' '}
            Edit
          </button>
        </div>
      </div>
    )
  }
}

export default Project
