// 浏览器环境下, 使用isomorphic fetch
let fetch
if (typeof GLOBAL === 'undefined') {
  fetch = require('isomorphic-fetch')
} else {
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

function request (params) {
  const method = params.method || 'GET'
  const credentials = 'include'
  // const mode = 'no-cors'
  const mode = 'cors' // default option, can be simply removed
  const headers = params.headers || {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // 'X-User-Email': localStorage.getItem('email'),
    // 'X-User-Token': localStorage.getItem('token')
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

export default {
  get: params => request(Object.assign({ method: 'GET' }, params)),
  put: params => request(Object.assign({ method: 'PUT' }, params)),
  post: params => request(Object.assign({ method: 'POST' }, params)),
  delete: params => request(Object.assign({ method: 'DELETE' }, params))
}
