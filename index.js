var badges = module.exports = {}
var badge = require('./badge')

badges.deprecated = badge('stability', 'deprecated', {
  categoryColor: '#C62914'
  , width: 110
  , labelWidth: 45
})

badges.experimental = badge('stability', 'experimental', {
  categoryColor: '#DD5F0A'
  , width: 117
  , labelWidth: 45
})

badges.unstable = badge('stability', 'unstable', {
  categoryColor: '#E5AE13'
  , width: 95
  , labelWidth: 45
})

badges.stable = badge('stability', 'stable', {
  categoryColor: '#74C614'
  , width: 85
  , labelWidth: 45
})

badges.frozen = badge('stability', 'frozen', {
  categoryColor: '#33C614'
  , width: 85
  , labelWidth: 45
})

badges.locked = badge('stability', 'locked', {
  categoryColor: '#14C6C6'
  , width: 85
  , labelWidth: 45
})
