var badges = require('./')
var path = require('path')
var fs = require('fs')

var header = '<svg width="120" height="19" xmlns="http://www.w3.org/2000/svg">'
var footer = '</svg>'

Object.keys(badges).forEach(function(name) {
  var filename = __dirname + '/dist/' + name + '.svg'
  var contents = header + badges[name] + footer

  console.error('generated "' + path.relative(__dirname, filename) + '"')
  fs.writeFileSync(filename, contents)
})
