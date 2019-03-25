import axios from 'axios'
import Project from './Project'

class Projects {
  constructor () {
    this.projects = []
    this.gallery = {}
  }
  getProjects () {
    return new Promise((resolve, reject) => {
      axios.get('data/projects.json').then(({ data }) => {
        const { projects } = data
        this.projects = projects
        this.buildGallery(projects)
        resolve('done!')
      })
    })
  }

  buildGallery (data) {
    var gallery = document.createElement('div')
    gallery.setAttribute('class', 'gallery')
    for (let i = 0; i < data.length; i++) {
      let project = new Project(data[i])
      let card = project.buildCard()
      gallery.appendChild(card)
    }
    this.gallery = gallery
  }
}

export default Projects
