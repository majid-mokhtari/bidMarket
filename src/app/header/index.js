import axios from 'axios'

class Header {
  constructor () {
    this.header = null
  }
  getHeader () {
    return new Promise((resolve, reject) => {
      axios.get('snippets/header.html').then(({ data }) => {
        this.header = data
        resolve(data)
      })
    })
  }
}

export default Header
