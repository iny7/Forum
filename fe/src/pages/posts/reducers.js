import { browserHistory } from 'react-router'

const initialState = {
  isFetching: false,
  posts: []
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'RECEIVE_POSTS':
      return {
        ...state,
        posts: payload.posts
      }

    case 'RECEIVE_POST':
      console.log('RECEIVE_POST')
      return {
        ...state,
        isFetching: false,
        posts: [...state.posts, payload.post]
      }

    case 'CREATED_POST_SUCCESS': // post:created
      const { post, id } = action
      // TODO 放到action的回调里处理
      browserHistory.replace(`/posts/${id}`)
      return {
        ...state,
        isFetching: false,
        posts: action.posts.push[post]
      }

    default:
      return state
  }
}
