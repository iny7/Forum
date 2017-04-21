// 浏览器环境下, 使用isomorphic fetch
let fetch
if (typeof GLOBAL === 'undefined') {
  console.log('web, 使用isomorphic fetch')
  fetch = require('isomorphic-fetch')
} else {
  console.log('rn, 使用原生fetch')
  fetch = GLOBAL.fetch
  // rn使用originalHXR方便在chrome network中调试
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
}

function getQueryString (params = {}) {
  const esc = encodeURIComponent
  return Object.keys(params).map((k) => {
    const val = params[k]
    if (val) {
      return esc(k) + '=' + esc(val)
    } else {
      return ''
    }
  }).join('&')
}

/**
 * TODO 因为该数据是由通用的saga赋值, 但又不存在store里,
 * 所以可以单开一个文件, 以js对象的形式存放类似数据,
 * 在saga的运行过程中不断被更新, 是独立于store外的app state
 **/
let currentUser = 'aaa'

function request (params) {
  console.log(currentUser)
  const method = params.method || 'GET'
  const credentials = 'include'

  // const mode = 'no-cors'
  const mode = 'cors' // default option, can be simply removed
  const headers = params.headers || {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-User-Email': currentUser.email,
    'X-User-Token': currentUser.token
  }

  let qs = ''
  if (['GET', 'DELETE'].indexOf(method) > -1) {
    qs = '?' + getQueryString(params.data)
  } else { // POST or PUT
    var body = JSON.stringify(params.data)
  }
  const prefix = 'http://localhost:3000'

  const url = `${prefix}${params.url}.json${qs}`

  return fetch(url, {
    method, credentials, mode, headers, body
  }).then(response => {
    return response.text().then((text) => {
      return text ? JSON.parse(text) : {}
    })
  })
}

export function setUser (user) {
  console.log('setUser', user)
  currentUser = user
}

export default {
  get: params => request(Object.assign({ method: 'GET' }, params)),
  put: params => request(Object.assign({ method: 'PUT' }, params)),
  post: params => request(Object.assign({ method: 'POST' }, params)),
  delete: params => request(Object.assign({ method: 'DELETE' }, params))
}
