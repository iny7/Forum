export default function byId (state = {}, action) {
  const { type, payload } = action
  switch (type) {
    case 'receive:posts':
    case 'receive:post':
      return {
        ...state,
        ...payload.entities.users
      }
    }
  return state
}
