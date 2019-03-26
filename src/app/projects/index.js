import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import Project from './Project'

class Projects extends Component {
  constructor () {
    super()
    this.state = {
      projects: []
    }
  }
  componentWillMount () {
    this.getProjects()
  }
  getProjects () {
    let projects = []
    axios.get('data/projects.json').then(res => {
      // build custom json res
      for (let i = 1; i <= 100; i++) {
        let obj = {
          id: i,
          bidPrice: 100
        }
        if (i % 2 === 0) {
          obj = {
            ...obj,
            ...{ expirationDate: '2019-03-24 18:33:00' }
          }
        } else {
          obj = {
            ...obj,
            ...{ expirationDate: moment().add(i, 'm') }
          }
        }
        projects.push(obj)
      }
      this.setState({ projects })
    })
  }
  buildGallery () {
    const { projects } = this.state
    if (!projects.length) return null
    return projects.map((p, i) => {
      return <Project key={i} project={p} />
    })
  }
  render () {
    const gallery = this.buildGallery()
    return <div className='gallery'>{gallery}</div>
  }
}

export default Projects
