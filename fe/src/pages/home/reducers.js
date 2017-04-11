import { browserHistory } from 'react-router'

const initialState = {
  token: '', // localStorage.getItem('token')
  user: {
    id: '',
    email: '',
    token: ''
  },
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
    case 'auth:success':
      const { user } = action.payload
      const { id, email, token } = user
      localStorage.setItem('userId', id)
      localStorage.setItem('email', email)
      localStorage.setItem('token', token)
      setTimeout(() => {
        browserHistory.replace('/posts')
      })
      return {
        ...state,
        user
        // isFetching: false,
      }
    case 'signout:request':
      localStorage.removeItem('userId')
      localStorage.removeItem('email')
      localStorage.removeItem('token')
      setTimeout(() => {
        browserHistory.replace('/')
      })
      return {
        ...state,
        user: {}
      }
    default:
      return state
  }
}