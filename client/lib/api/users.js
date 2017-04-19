import myFetch from '../utils/myFetch'

const SIGNIN_PATH = '/users/sign_in'
const SIGNUP_PATH = '/users'
const SIGNOUT_PATH = '/users/sign_out'

export async function signin (user) {
  return await myFetch.post({
    url: SIGNIN_PATH,
    data: { user }
  })
}

export async function signup (user) {
  return await myFetch.post({
    url: SIGNUP_PATH,
    data: { user }
  })
}

export function logout () {
  // TODO 后端应销毁token
  myFetch.delete({
    url: SIGNOUT_PATH
  })
}
