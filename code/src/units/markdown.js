/*
 * @FilePath: \code\src\units\markdown.js
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-04-24 17:38:19
 * @Description:markdown相关的拓展
 */
// 点击复制
const toClipboard = (copySpan) => {
  const range = document.createRange()
  range.selectNodeContents(copySpan)
  const selection = window.getSelection()
  selection.removeAllRanges()// （注意）
  selection.addRange(range)
  const copyContent = document.execCommand('Copy', false, null)
  selection.removeRange(range)
  if (copyContent) {
    return true
  }
  return false
}
// 页面加载完毕添加事件
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('article').forEach((block) => {
    block.classList.add('markdown-body')
  })
  // 代码相关的处理
  document.querySelectorAll('code').forEach((block) => {
    const lastChild = block.parentNode.lastChild
    if (lastChild.className !== 'codetype') {
      const codetypespan = document.createElement('span')
      codetypespan.className = 'codetype'
      codetypespan.innerText = lastChild.className.split('-')[1]
      codetypespan.onmouseenter = () => {
        codetypespan.innerText = '点击复制'
      }
      codetypespan.onmouseleave = () => {
        codetypespan.innerText = lastChild.className.split('-')[1]
        codetypespan.classList.remove('active', 'unactive')
      }
      codetypespan.onclick = () => {
        if (toClipboard(block)) {
          codetypespan.innerText = '复制成功'
          codetypespan.classList.add('active')
        } else {
          codetypespan.innerText = '复制失败'
          codetypespan.classList.add('unactive')
        }
      }
      block.parentNode.appendChild(codetypespan)
    }
  })
  // 标题相关的处理
  document.querySelectorAll('.markdown-body h1').forEach((block) => {
    console.log(block)
  })
})
