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

    case 'follow:user:byId': {
      const { userId } = payload
      const user = state[userId]
      return {
        ...state,
        [user.id]: {
          ...user,
          is_followed: true,
          followers_count: user.followers_count + 1
        }
      }
    }
    case 'unfollow:user:byId': {
      const { userId } = payload
      const user = state[userId]
      return {
        ...state,
        [user.id]: {
          ...user,
          is_followed: false,
          followers_count: user.followers_count - 1
        }
      }
    }
  }
  return state
}
