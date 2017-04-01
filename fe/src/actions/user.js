import myFetch from 'utils/myFetch'
import { browserHistory } from 'react-router'

const SIGNIN_PATH = '/users/sign_in'
const SIGNUP_PATH = '/users'
const SIGNOUT_PATH = '/users/sign_out'

function createUser (user) {
  return (dispatch) => {
    dispatch({
      type: 'CREATE_USER'
    })
    return myFetch.post({
      url: SIGNUP_PATH,
      data: { user }
    }).then((result) => {
      console.log(result)
    }).catch(e => console.log('Oops, error'))
  }
}

function login (user) {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN',
      user
    })
    return myFetch.post({
      url: SIGNIN_PATH,
      data: { user }
    }).then((result) => {
      const { email, authentication_token: token } = result
      if (token) {
        console.log('success')
        // do not use dispatch action to redirect but react-router
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { email, token }
        })
        browserHistory.replace('/posts')
      } else {
        // this.setState({})
      }
    }).catch(e => console.log('sign in error'))
  }
}

function logout () {
  return (dispatch) => {
    dispatch({ type: 'user:signout' })
    browserHistory.replace('/')
    return myFetch.delete({ url: SIGNOUT_PATH })
  }
}

export {
  createUser,
  login,
  logout
}