var remote = require('electron').remote
var fs = require('fs')
var ImagePoly = require('lightning-image-poly')
var picture = require('cat-picture')
var src = picture.src

// Remove the default cat picture.
picture.remove()

// Create the polygon editor, with the image.
// eslint-disable-next-line no-new
new ImagePoly('#visualization', null, [src], { hullAlgorithm: 'convex' })

function save () {
  // Electron magic to make a PDF?
  remote.getCurrentWindow().webContents.printToPDF({
    portrait: true
  }, function (err, data) {
    if (err) console.error(err)
    // Use node file system module to create a file.
    fs.writeFile('annotation.pdf', data, function (err) {
      if (err) {
        window.alert('error generating pdf! ' + err.message)
      } else {
        window.alert('pdf saved!')
      }
    })
  })
}

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 80) {
    save()
  }
})
