import myFetch from 'utils/myFetch'

const SIGNIN_PATH = '/users/sign_in'
const SIGNUP_PATH = '/users'
const SIGNOUT_PATH = '/users/sign_out'

export function signup (user) {
  return new Promise((resolve) => {
    myFetch.post({
      url: SIGNUP_PATH,
      data: { user }
    }).then((result) => {
      resolve(result)
    }).catch(e => console.log('Oops, error'))
  })
}

export function signin (user) {
  return new Promise((resolve) => {
    myFetch.post({
      url: SIGNIN_PATH,
      data: { user }
    }).then((result) => {
      resolve(result)
    }).catch(e => console.log('Oops, error'))
  })
}

export function logout () {
  return new Promise((resolve) => {
    // TODO 后端应销毁token
    myFetch.delete({
      url: SIGNOUT_PATH
    })
  })
}
