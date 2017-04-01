const initialState = {
  token: localStorage.getItem('token'),
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
      const { email, token } = action.payload
      localStorage.setItem('email', email)
      localStorage.setItem('token', token)
      return Object.assign({}, state, {
        isFetching: false,
        token
      })
    case 'user:signout':
      localStorage.removeItem('email')
      localStorage.removeItem('token')
      return {
        ...state,
        user: {},
        token: ''
      }
    default:
      return state
  }
}