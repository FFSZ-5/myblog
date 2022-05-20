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
const mdFc = (event) => {
  document.querySelectorAll('article').forEach((block) => {
    block.classList.add('markdown-body')
  })
  // 代码相关的处理
  document.querySelectorAll('code').forEach((block) => {
    const lastChild = block.parentNode.lastChild
    if (lastChild.className !== 'codetype' && lastChild.className) {
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
  // 游标生成
  const h2 = []
  let active = ''
  let timer = null
  let isclick = false
  document.querySelectorAll('.markdown-body h2').forEach((block, index) => {
    if (index === 0) {
      active = index
    }
    const id = block.innerHTML.includes('.') ? block.innerHTML.split('.')[1] : block.innerHTML
    block.setAttribute('id', `h-${index}`)
    h2.push(id)
  })
  const vernier = document.querySelector('.vernier')
  let vernierHtml = '<ul>'
  const changeActive = () => {
    const liTop = document.querySelector(`.ver-${active}`).offsetTop + document.querySelector(`.ver-${active}`).clientHeight / 2
    const half = vernier.clientHeight / 2
    ul.style.top = (half - liTop) + 'px'
  }
  h2.forEach((element, index) => {
    if (index === active) {
      vernierHtml += `<li class="ver-${index} active">${element}</li>`
    } else {
      vernierHtml += `<li class="ver-${index}">${element}</li>`
    }

    if (index === h2.length - 1) {
      vernierHtml += '</ul>'
      vernier.innerHTML = vernierHtml
    }
  })
  const ul = vernier.querySelector('ul')

  changeActive()
  h2.forEach((element, index) => {
    document.querySelector(`.ver-${index}`).addEventListener('click', (e) => {
      isclick = true
      document.querySelector(`.ver-${active}`).classList.remove('active')
      active = index
      document.querySelector(`.ver-${active}`).classList.add('active')
      document.querySelector(`#h-${index}`).scrollIntoView({ behavior: 'smooth' })
      changeActive()
    })
  })
  document.querySelector('.content').addEventListener('scroll', (e) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      isclick = false
    }, 500)
    if (!isclick) {
      const scrollTop = e.target.scrollTop
      h2.forEach((element, index) => {
        const ele = document.querySelector(`#h-${index}`)
        const childTop = ele.offsetTop
        const accuracy = 15
        if (childTop - accuracy < scrollTop && scrollTop < childTop + accuracy) {
          document.querySelector(`.ver-${active}`).classList.remove('active')
          active = index
          document.querySelector(`.ver-${active}`).classList.add('active')
          changeActive()
        }
      })
    }
  })
  // 搜索框实现
}
export const mdFunction = mdFc
