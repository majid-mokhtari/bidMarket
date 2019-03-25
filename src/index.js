import Header from './header'
import Projects from './projects'
import './index.css'

const root = document.getElementById('root')

const header = new Header()
header.getHeader().then(res => {
  root.innerHTML += res
})

const projects = new Projects()
projects.getProjects().then(res => {
  const { gallery } = projects
  root.appendChild(gallery)
})
