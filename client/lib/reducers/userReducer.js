export default function byId (state = {}, action) {
  const { type, payload } = action
  switch (type) {
    case 'receive:posts':
    case 'receive:post':
    case 'receive:users':
    case 'receive:user':
      return {
        ...state,
        ...payload.entities.users
      }
    }
  return state
}
