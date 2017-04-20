// 数据在被取出的时候再根据特定的需求排序
// ids好像暂时作用不大, 先不用?
export default function byId (state = {}, action) {
  const { type, payload } = action
  switch (type) {
    case 'receive:posts':
    case 'receive:post': {
      console.log(payload)
      return {
        ...state,
        ...payload.entities.posts
      }
    }
    case 'receive:comment': {
      const { entities: { comments }, result } = payload
      const { id, post_id } = comments[result]
      const post = {...state[post_id]}
      post.comments.push(id)
      return {
        ...state,
        [post.id]: post
      }
    }
  }
  return state
}
