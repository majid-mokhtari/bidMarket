import React, { Component } from 'react'
import Projects from './projects'
import Header from './header'
import Footer from './footer'
import './app.css'

class App extends Component {
  render () {
    return (
      <div className='app-container'>
        <Header />
        <Projects />
        <Footer />
      </div>
    )
  }
}

export default App
