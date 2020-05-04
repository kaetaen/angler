const puppeteer = require('puppeteer')

class Browser {
  constructor (links) {
    this.links = links
  }

  async browse () {
    try {
      const browser = await puppeteer.launch({
        slowMo: 1000,
        headless: false
      })

      return browser
    } catch (error) {
      this.handleErrors(error)
    }
  }

  handleErrors (error, msg) {
    msg = msg || 'Verifique os parâmetros informados'
    console.log(`${error.name}: ${msg}`)
  }
}

module.exports = Browser
