module.exports = badge

function badge(label, category, options) {
  options = options || {}

  options.labelColor = options.labelColor || '#4b4b4b'
  options.categoryColor = options.categoryColor || '#74c614'
  options.width = options.width || 100
  options.labelWidth = options.labelWidth || 35

  var svg = ''
  var height = 19
  var shadow = 2
  var body = height - shadow

  // shadow
  svg += el('rect', {
      x: 0
    , y: 0
    , width: options.width
    , height: height
    , style: {
        fill: options.labelColor
      , opacity: 0.3
    }
  })

  svg += el('rect', {
      x: 0
    , y: 0
    , width: options.width
    , height: body
    , style: {
      fill: options.labelColor
    }
  })

  svg += el('rect', {
      x: options.labelWidth
    , y: 0
    , width: options.width - options.labelWidth
    , height: body
    , style: {
      fill: options.categoryColor
    }
  })

  svg += dropshadowText(5, body / 2, label)
  svg += dropshadowText(options.labelWidth + 5, body / 2, category)

  return svg
}

function el(el) {
  var args = Array.prototype.slice.call(arguments, 1)
  var str = '<' + el

  args.filter(function(arg) {
    return typeof arg !== 'string'
  }).forEach(function(opts) {
    Object.keys(opts).forEach(function(key) {
      var value = opts[key]

      if (Array.isArray(value)) value = value.join(' ')
      if (typeof value === 'object') {
        value = Object.keys(value).reduce(function(str, key) {
          str += key
          str += ':'
          str += value[key]
          str += ';'
          return str
        }, '')
      }

      str += ' '
      str += key
      str += '="'
      str += String(value).replace(/\"/g, '\\"')
      str += '"'
    })
  })

  str += '>'

  args.filter(function(arg) {
    return typeof arg === 'string'
  }).forEach(function(inner) {
    str += inner
  })


  str += '</' + el + '>'

  return str
}

function dropshadowText(x, y, label) {
  return el('text', label, {
      x: x
    , y: y + 1
    , style: {
        'fill': '#000'
      , 'opacity': 0.75
    }
  }) + el('text', label, {
      x: x
    , y: y
    , style: {
      'fill': '#fff'
    }
  })
}
