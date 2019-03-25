import React, { Component } from 'react'
import Projects from './projects'
import './index.css'

class App extends Component {
  render () {
    return <Projects />
  }
}

export default App

// const projects = new Projects()
// projects.getProjects().then(res => {
//   const { gallery } = projects
//   root.appendChild(gallery)
// })
