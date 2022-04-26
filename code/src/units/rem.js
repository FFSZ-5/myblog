(function (document, window) {
  var dom = document.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = dom.clientWidth
    if (!clientWidth) return
    if (clientWidth >= 1920) {
      dom.style.fontSize = 100 * (clientWidth / 1920) + 'px'
    } else if (clientWidth >= 1680) {
      dom.style.fontSize = 100 * (clientWidth / 1680) + 'px'
    } else if (clientWidth >= 1440) {
      dom.style.fontSize = 100 * (clientWidth / 1440) + 'px'
    } else if (clientWidth >= 1280) {
      dom.style.fontSize = 100 * (clientWidth / 1280) + 'px'
    } else if (clientWidth >= 1263) {
      dom.style.fontSize = 100 * (clientWidth / 1263) + 'px'
    } else {
      dom.style.fontSize = 100 * (clientWidth / 750) + 'px'
    }
  }

  if (!document.addEventListener) return
  window.addEventListener(resizeEvt, recalc, false)
  document.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
