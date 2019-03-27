import React, { Component } from 'react'
import moment from 'moment'
import '../index.css'

class Project extends Component {
  constructor (props) {
    super()
    const { project } = props
    const { lowestBid } = project
    this.state = {
      active: this.isActive(project),
      lowestBid: lowestBid,
      bidPrice: 0
    }
    this.timer = setInterval(this.updateStatus.bind(this), 1000)
    this.onSubmitBid = this.onSubmitBid.bind(this)
  }
  onSubmitBid () {
    const { bidPrice } = this.state
    this.setState({ lowestBid: bidPrice })
    // send request and save the price for current user
    // this.props.saveBidPrice()
  }
  updateStatus () {
    const { project } = this.props
    const active = this.isActive(project)
    if (active) {
      this.updateBidPrice()
    } else {
      clearInterval(this.timer)
      // stop the timer and lock min bid price in db
    }
    this.setState({ active })
  }
  updateBidPrice () {
    // get request to (in memory db like redis) retirieve latest price every second
    const { lowestBid } = this.state
    let newPrice = lowestBid > 0 ? lowestBid - 1 : 0
    this.setState({ lowestBid: newPrice })
  }
  isActive (project) {
    const { expirationDate } = project
    var now = new Date()
    var expDate = new Date(expirationDate)
    return now.getTime() < expDate.getTime()
  }
  render () {
    const { active, lowestBid } = this.state
    const { project } = this.props
    return (
      <div className='gallery-item'>
        <div>
          <label>Project: </label>
          <span>{project.id}</span>
        </div>
        <div>
          <label>Active: </label>
          <span className={`project-status-${active ? 'active' : 'inactive'}`}>
            {active ? 'Yes' : 'No'}
          </span>
        </div>
        <div>
          <label>Expires At: </label>
          <span>
            {moment(project.expirationDate).format('MMMM Do YYYY, h:mm a')}
          </span>
        </div>
        <div>
          <label htmlFor='bidPrice'>Lowest Bid: </label>
          <span id='bidPrice'>${lowestBid}</span>
        </div>
        <div style={{ display: active ? 'block' : 'none', height: 0 }}>
          <button className='button' onClick={this.onSubmitBid}>
            {' '}
            Bid
          </button>
          <input
            id='bidPrice'
            onChange={e => this.setState({ bidPrice: e.target.value })}
            ref='bidPrice'
          />
        </div>
      </div>
    )
  }
}

export default Project
