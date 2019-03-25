import axios from 'axios'
import moment from 'moment'
import Project from './Project'

class Projects {
  constructor () {
    this.projects = []
    this.gallery = {}
  }
  getProjects () {
    return new Promise((resolve, reject) => {
      axios.get('data/projects.json').then(res => {
        // build custom json res
        for (let i = 1; i <= 100; i++) {
          this.projects.push(
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
        this.buildGallery(this.projects)
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
