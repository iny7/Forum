const initialState = {
  loggedIn: false,
  user: {
    userId: 0,
    email: '',
    token: '',
  }
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'base:set:loggedIn':
      return {
        ...state,
        loggedIn: payload.loggedIn
      }
    case 'base:set:currentUser': {
      const { user } = payload
      return {
        ...state,
        loggedIn: !!user,
        user
      }
    }
  }
  return state
}