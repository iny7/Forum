// 浏览器环境下, 使用isomorphic fetch
if (typeof global === 'undefined') {
  var fetch = require('isomorphic-fetch')
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

  const url = `${params.url}.json${qs}`

  return fetch(url, {
    method, credentials, headers, body
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
