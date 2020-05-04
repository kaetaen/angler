const Browser = require('../Browser')

class GoogleDrive extends Browser {
  downloadableLinkGen () {
    const urls = this.links.map((url) => {
      const [, id] = url.split('=')
      const templateLink = `https://drive.google.com/uc?id=${id}&export=download`

      return templateLink
    })

    return urls
  }

  async download () {
    try {
      const browse = await this.browse()
      const links = this.downloadableLinkGen()

      for (const url of links) {
        const page = await browse.newPage()
        await page.goto(url)
      }
    } catch (error) {
      this.handleErrors(error, 'Erro desconhecido')
    }
  }
}

module.exports = GoogleDrive
