import { takeEvery, put } from 'redux-saga/effects'
import { Actions } from 'react-native-router-flux'

function* mobileRouteHelper ({ payload }) {
  const { method, url } = payload
  switch (method) {
    case 'replace':
      console.log('接受到 replace', url)
      var routeName = url.replace(/^\//, '')
      routeName = 'post-list'
      Actions['main']()
      // yield put({ type: Actions[routeName] })
      // Actions['main']()
      // Actions['posts']()
      // Actions['post-list']({type:'replace'})
      // e.g Actions.post()
      // yield call([Actions, Actions[routeName]])
  }
}

export default function* () {
  yield takeEvery('route:change', mobileRouteHelper)
}
