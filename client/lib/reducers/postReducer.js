export default function byId (state = {}, action) {
  const { type, payload } = action
  switch (type) {
    case 'receive:posts':
    case 'receive:post':
    case 'post:create:success':
      return {
        ...state,
        ...payload.entities.posts
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
    case 'list:post:success': {
      const{ post_id, likes_count } = payload
      const post = {
        ...state[post_id],
        liked: true,
        likes_count
      }
      return {
        ...state,
        [post.id]: post
      }
    }
    case 'unlike:post:success': {
      const { post_id, likes_count } = payload
      const post = {
        ...state[post_id],
        liked: false,
        likes_count
      }
      return {
        ...state,
        [post.id]: post
      }
    }
  }
  return state
}
