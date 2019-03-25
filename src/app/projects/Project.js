import moment from 'moment'

class Project {
  constructor (data) {
    this.project = data || {}
    this.active = this.isActive()
    setInterval(this.updateStatus.bind(this), 1000)
  }
  buildCard () {
    let galleryItem = document.createElement('div')
    galleryItem.setAttribute('class', 'gallery-item')
    let formattedExpirDate = moment(this.project.expirationDate).format(
      'MMMM Do YYYY, h:mm:ss a'
    )
    let expirationDate = `<div><p id="project-status-${
      this.project.id
    }">Active: ${
      this.active ? 'Yes' : 'No'
    }</p><p>Expires At: ${formattedExpirDate}</p></div>`
    galleryItem.innerHTML = expirationDate
    return galleryItem
  }
  getExpirationDate () {
    if (!this.project) return null
    return this.project.expirationDate
  }
  updateStatus () {
    this.active = this.isActive()
    let el = document.getElementById(`project-status-${this.project.id}`)
    el.innerText = `Active: ${this.active ? 'Yes' : 'No'}`
  }
  isActive () {
    var now = new Date()
    var expirationDate = new Date(this.getExpirationDate())
    return now.getTime() < expirationDate.getTime()
  }
}

export default Project
