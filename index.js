import picture from 'cat-picture'
import image from 'lightning-image-poly'

var src = picture.src
picture.remove()
var viz = new image('#visualization', null, [src], { hullAlgorithm: 'convex' })
