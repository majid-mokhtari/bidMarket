import axios from 'axios'

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
      let galleryItem = document.createElement('div')
      galleryItem.setAttribute('class', 'gallery-item')
      gallery.appendChild(galleryItem)
    }
    this.gallery = gallery
  }
}

export default Projects
