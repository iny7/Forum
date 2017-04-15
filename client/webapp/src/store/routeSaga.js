import { takeEvery, put } from 'redux-saga/effects'
import { replace } from 'react-router-redux'

function* webRouteHelper ({ payload }) {
  const { method, url } = payload
  switch (method) {
    case 'replace':
      console.log('接收到 replace')
      yield put(replace(url))
  }
}

export default function* routeSaga () {
  yield takeEvery('route:change', webRouteHelper)
}
