const fs = require('fs')
const sources = require('./sources')

class DownloadManager {
  constructor () {
    this.option = process.argv[2]
    this.links = process.argv[3]
    this.linksArr = []
    this.source = ''
  }

  argsParser () {
    if (this.option === '--single' || this.option === '-s') {
      this.option = 'single'
    } else if (this.option === '--file' || this.option === '-f') {
      this.option = 'file'
    } else if (this.option === '-h' || this.option === '--help') {
      this.option = 'help'
    } else {
      this.handleErrors(ReferenceError, `A opção ${this.option} não existe`)
    }
  }

  setOption () {
    switch (this.option) {
      case 'single':
        this.linksArr = [this.links]
        break

      case 'file':
        this.linksArr = fs
          .readFileSync(this.links, 'utf-8')
          .toString()
          .trim()
          .split('\n')
        break

      case 'help':
        this.userHelper()
        process.exit()
    }
    [, this.source] = this.linksArr[0].split('.')
  }

  initDownloads () {
    switch (this.source) {
      case 'zippyshare':
        new sources
          .Zippyshare(this.linksArr)
          .download()
        break

      case 'google':
        new sources
          .GoogleDrive(this.linksArr)
          .download()
        break

      default:
        this.handleErrors(ReferenceError, 'Fonte desconhecida')
    }
  }

  userHelper () {
    console.log(
      `
      |---------------------------------------------|
      |         Baixe arquivos com o Angler         |
      |---------------------------------------------|
      |                   COMANDOS                  |
      |                                             |
      | -s --single => download único:              |
      |   param: url                                |
      |   exemplo: -s https://exemple.download.file |  
      |                                             |
      | -f --file => multiplos downloads:           |
      |   param: arquivo.txt                        |
      |   exemplo: -f file.txt                      |
      |                                             |
      | -h --helper => Ajuda ao usuário             |
      |---------------------------------------------|
      `
    )
  }

  handleErrors (error, msg) {
    msg = msg || 'Verifique os parâmetros informados'
    console.log(`${error.name}: ${msg}`)
    process.exit()
  }

  run () {
    this.argsParser()
    this.setOption()
    this.initDownloads()
  }
}

module.exports = new DownloadManager()
