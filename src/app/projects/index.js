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
    return new Promise((resolve, reject) => {
      axios.get('data/projects.json').then(res => {
        // build custom json res
        for (let i = 1; i <= 100; i++) {
          projects.push(
            i % 2 === 0
              ? {
                id: i,
                expirationDate: '2019-03-24 18:33:00'
              }
              : {
                id: i,
                expirationDate: moment().add(i, 'm')
              }
          )
        }
        this.setState({ projects })
        resolve('done!')
      })
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
