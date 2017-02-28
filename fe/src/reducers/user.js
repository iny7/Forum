import { browserHistory } from 'react-router'

const initialState = {
  user: {},
  isFetching: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'LOGIN':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'LOGIN_SUCCESS':
      browserHistory.replace('/posts')
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user
      })
  }
}