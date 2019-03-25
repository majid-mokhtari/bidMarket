import React, { Component } from 'react'
import moment from 'moment'
import '../index.css'

class Project extends Component {
  constructor (props) {
    super()
    this.state = {
      active: this.isActive(props.project)
    }
    setInterval(this.updateStatus.bind(this), 1000)
  }
  updateStatus () {
    const { project } = this.props
    this.setState({ active: this.isActive(project) })
  }
  isActive (project) {
    const { expirationDate } = project
    var now = new Date()
    var expDate = new Date(expirationDate)
    return now.getTime() < expDate.getTime()
  }
  render () {
    const { active } = this.state
    const { project } = this.props
    return (
      <div className='gallery-item'>
        <p>
          Active:{' '}
          <span className={`project-status-${active ? 'active' : 'inactive'}`}>
            {active ? 'Yes' : 'No'}
          </span>
        </p>
        <p>
          Expires At:{' '}
          {moment(project.expirationDate).format('MMMM Do YYYY, h:mm a')}
        </p>
      </div>
    )
  }
}

export default Project
