import axios from 'axios'

class Footer {
  constructor () {
    this.footer = null
  }
  getFooter () {
    return new Promise((resolve, reject) => {
      axios.get('snippets/footer.html').then(({ data }) => {
        this.footer = data
        resolve(data)
      })
    })
  }
}

export default Footer
