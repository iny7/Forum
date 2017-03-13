import { browserHistory } from 'react-router'

const initialState = {
  isFetching: false,
  posts: []
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        posts: action.posts
      })

    case 'RECEIVE_POST':
      console.log('RECEIVE_POST')
      return Object.assign({}, state, {
        isFetching: false,
        posts: [...state.posts, payload.post]
      })

    case 'CREATED_POST_SUCCESS': // post:created
      const { post, id } = action
      browserHistory.replace(`/posts/${id}`)
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts.push[post]
      })

    default:
      return state
  }
}
