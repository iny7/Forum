const initialState = {
  loggedIn: false,
  email: '', // TODO 暂时没用, 后面看
  token: '',
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'base:set:loggedIn':
      return Object.assign({}, state, {
        loggedIn: payload.loggedIn
      })
  }
  return state
}