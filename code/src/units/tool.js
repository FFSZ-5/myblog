/*
 * @FilePath: \code\src\units\tool.js
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-29 09:27:52
 * @Description:
 */
// 获取特定文件夹下的文件名
function getName (val) {
  var arr = []
  switch (val) {
    case 'mdfile': {
      var requireModule = require.context('../mdfile', true, /[.md|.vue]$/)
      for (var i = 0; i < requireModule.keys().length; i++) {
        arr.push(
          requireModule.keys()[i].substr(2, requireModule.keys()[i].length)
        )
      }
      break
    }
  }
  return arr
}
// 文件夹下的文件排序
function store (val, val1) {
  const result = []
  if (val1) {
    // 文件夹排序
    if (Object.keys(val).length > 0) {
      for (const i in val) {
        const obj = {}
        obj.name = i.split('-')[1]
        obj.url = val[i]
        result[Number(i.split('-')[0]) - 1] = obj
      }
    }
  } else {
    // 文件夹下的文件排序
    if (val && val.length > 0) {
      for (const i of val) {
        result[Number(i.name.split('-')[0])] = i.name.split('.')[0].split('-')[1]
      }
    }
  }

  return result
}
export const getFileName = getName
export const storeFile = store
