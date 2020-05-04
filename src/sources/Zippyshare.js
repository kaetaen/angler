const Browser = require('../Browser')

class Zippyshare extends Browser {
  async download () {
    try {
      const browse = await this.browse()
      const links = this.links

      for (const url of links) {
        const page = await browse.newPage()
        await page.goto(url, {
          waitUntil: 'load',
          timeout: 0
        })
        await page.waitForSelector('a#dlbutton')
        await page.focus('a#dlbutton')
        await page.click('a#dlbutton')
        await page.close()
      }
    } catch (error) {
      this.handleErrors(error)
    }
  }
}

module.exports = Zippyshare
