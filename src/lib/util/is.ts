function stringContains(str: string, text: string) {
  return str.indexOf(text) > -1
}

const is = {
  arr: function (a) {
    return Array.isArray(a)
  },
  obj: function (a) {
    return stringContains(Object.prototype.toString.call(a), 'Object')
  },
  pth: function (a) {
    return is.obj(a) && a.hasOwnProperty('totalLength')
  },
  svg: function (a) {
    return a instanceof SVGElement
  },
  inp: function (a) {
    return a instanceof HTMLInputElement
  },
  dom: function (a) {
    return a.nodeType || is.svg(a)
  },
  str: function (a) {
    return typeof a === 'string'
  },
  fnc: function (a) {
    return typeof a === 'function'
  },
  und: function (a) {
    return typeof a === 'undefined'
  },
  nil: function (a) {
    return is.und(a) || a === null
  },
  hex: function (a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
  },
  rgb: function (a) {
    return /^rgb/.test(a)
  },
  hsl: function (a) {
    return /^hsl/.test(a)
  },
  col: function (a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a)
  },
}

export default is
