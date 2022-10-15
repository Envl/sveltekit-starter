function stringContains(str: string, text: string) {
  return str.indexOf(text) > -1
}
const urlRegex = new RegExp(
  /(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?/gi,
)

/**
 * source code from anime.js
 *
 * https://github.com/juliangarnier/anime/blob/3ebfd913a04f7dc59cc3d52e38275272a5a12ae6/src/index.js#L49
 */
const is = {
  arr: function (a: any) {
    return Array.isArray(a)
  },
  obj: function (a: any) {
    return stringContains(Object.prototype.toString.call(a), 'Object')
  },
  pth: function (a: any) {
    return is.obj(a) && a.hasOwnProperty('totalLength')
  },
  svg: function (a: any) {
    return a instanceof SVGElement
  },
  inp: function (a: any) {
    return a instanceof HTMLInputElement
  },
  dom: function (a: any) {
    return a.nodeType || is.svg(a)
  },
  str: function (a: any) {
    return typeof a === 'string'
  },
  fnc: function (a: any) {
    return typeof a === 'function'
  },
  und: function (a: any) {
    return typeof a === 'undefined'
  },
  nil: function (a: any) {
    return is.und(a) || a === null
  },
  hex: function (a: any) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
  },
  rgb: function (a: any) {
    return /^rgb/.test(a)
  },
  hsl: function (a: any) {
    return /^hsl/.test(a)
  },
  col: function (a: any) {
    return is.hex(a) || is.rgb(a) || is.hsl(a)
  },

  url(str: string) {
    return urlRegex.test(str)
  },
}

export default is
