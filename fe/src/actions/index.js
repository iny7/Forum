import myFetch from 'utils/myFetch'
import { browserHistory } from 'react-router'

const SIGNIN_PATH = '/users/sign_in'
const SIGNUP_PATH = '/users'

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
          payload: {
            email,
            token
          }
        })
        browserHistory.replace('/posts')
      } else {
        // this.setState({})
      }
    }).catch(e => console.log('sign in error'))
  }
}

function fetchPosts (category) {
  return (dispatch) => {
    dispatch({
      type: 'REQUEST_POSTS',
      category
    })
    return myFetch.get({
      url: '/posts',
      data: category ? { type: category } : ''
    }).then((result) => {
      dispatch({
        type: 'RECEIVE_POSTS',
        posts: result.posts
      })
    })
  }
}

function createPost (post) {
  return (dispatch) => {
    dispatch({
      type: 'CREATE_POST'
    })
    return myFetch.post({
      url: '/posts',
      data: { post }
    }).then((result) => {
      if (result.status_code === 200) {
        const id = result.post_id
        dispatch({
          type: 'CREATE_POST_SUCCESS',
          post,
          id
        })
      } else {
        dispatch({
          type: 'CREATE_POST_FAILED',
          error: result.errors
        })
      }
    })
  }
}

export {
  createUser,
  login,
  fetchPosts,
  createPost
}