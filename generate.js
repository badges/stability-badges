var badges = require('./')
var path = require('path')
var fs = require('fs')

var header = [
    '<?xml version="1.0" encoding="utf-8" standalone="no"?>'
  , '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'
  , '<svg width="120px"'
  , 'height="25px"'
  // Note: you'll get invalid images if you don't
  // use these attributes on the SVG element!
  , 'xmlns="http://www.w3.org/2000/svg"'
  , 'xmlns:xlink="http://www.w3.org/1999/xlink"'
  , '>'
].join('\n')

var footer = '\n</svg>'

Object.keys(badges).forEach(function(name) {
  var filename = __dirname + '/dist/' + name + '.svg'
  var contents = header + badges[name] + footer

  console.error('generated "' + path.relative(__dirname, filename) + '"')
  fs.writeFileSync(filename, contents)
})
