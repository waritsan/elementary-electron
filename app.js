var electron = require('electron')
var path = require('path')

electron.app.on('ready', function () {
  var mainWindow = new electron.BrowserWindow({ width: 600, height: 800 })
  mainWindow.loadURL(path.join('file://', __dirname, '/index.html'))
})
