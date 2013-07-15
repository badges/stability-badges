module.exports = badge

function badge(label, category, options) {
  options = options || {}

  options.labelColor = options.labelColor || '#4B4B4B'
  options.categoryColor = options.categoryColor || '#74C614'
  options.width = options.width || 100
  options.labelWidth = options.labelWidth || 35

  var svg = ''

  svg += el('rect', {
      x: 0
    , y: 2
    , width: options.width
    , height: 20
    , style: {
        fill: options.labelColor
      , opacity: 0.3
    }
  })

  svg += el('rect', {
      x: 0
    , y: 0
    , width: options.width
    , height: 20
    , style: {
      fill: options.labelColor
    }
  })

  svg += el('rect', {
      x: options.labelWidth
    , y: 0
    , width: options.width - options.labelWidth
    , height: 20
    , style: {
      fill: options.categoryColor
    }
  })

  svg += shadow(5, 10, label)
  svg += shadow(options.labelWidth + 5, 10, category)

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

function shadow(x, y, label) {
  return el('text', label, {
      x: x
    , y: y + 1
    , style: {
        'alignment-baseline': 'middle'
      , 'font-size': '10px'
      , 'fill': '#000'
      , 'opacity': '0.75'
      , 'font-family': 'Arial, Helvetica, sans-serif'
    }
  }) + el('text', label, {
      x: x
    , y: y
    , style: {
        'alignment-baseline': 'middle'
      , 'font-size': '10px'
      , 'fill': '#fff'
      , 'font-family': 'Arial, Helvetica, sans-serif'
    }
  })
}
