<!--
 * @FilePath: \code\test.md
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-04-24 15:11:24
 * @Description:
-->

- # 123

## _123_

### 123

```js
(function (document, window) {
  var dom = document.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      var clientWidth = dom.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 1920) {
        dom.style.fontSize = 100 * (clientWidth / 1920) + "px";
      } else if (clientWidth >= 1680) {
        dom.style.fontSize = 100 * (clientWidth / 1680) + "px";
      } else if (clientWidth >= 1440) {
        dom.style.fontSize = 100 * (clientWidth / 1440) + "px";
      } else if (clientWidth >= 1280) {
        dom.style.fontSize = 100 * (clientWidth / 1280) + "px";
      } else if (clientWidth >= 1263) {
        dom.style.fontSize = 100 * (clientWidth / 1263) + "px";
      } else {
        dom.style.fontSize = 100 * (clientWidth / 750) + "px";
      }
    };

  if (!document.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  document.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
```

```html
<div></div>
```

😂
