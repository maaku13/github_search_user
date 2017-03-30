const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, 'app/index.html')// 'index.html'
    const publicPath = express.static(path.join(__dirname, 'app'))// 'public'

    app.use('/app', publicPath) // '/public'
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}
