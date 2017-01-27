function getQueryString(params) {
  const esc = encodeURIComponent
  return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&')
}

function request(params) {
  const method = params.method || 'GET'
  const credentials = 'include'
  const headers = params.headers || {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

  let body, qs = ''
  if (['GET', 'DELETE'].indexOf(method) > -1)
    qs = '?' + getQueryString(params.data)
  else // POST or PUT
    body = JSON.stringify(params.data)

  const url = params.url + qs

  return fetch(url, { method, credentials, headers, body }).then(response => response.json())
}

export default {
  get: params => request(Object.assign({ method: 'GET' }, params)),
  put: params => request(Object.assign({ method: 'PUT' }, params)),
  post: params => request(Object.assign({ method: 'POST' }, params)),
  delete: params => request(Object.assign({ method: 'DELETE' }, params))
}