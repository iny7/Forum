export default function byId (state = {}, action) {
  const { type, payload } = action
  switch (type) {
    // case 'receive:posts':
    // 接收到帖子时, 使用normalize出的comments更新store
    case 'receive:comment':
    case 'receive:post': {
      return {
        ...state,
        ...payload.entities.comments
      }
    }
  }
  return state
}