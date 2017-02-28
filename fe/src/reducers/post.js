import { browserHistory } from 'react-router'

const initialState = {
  text: '',
  isFetching: false,
  posts: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_POSTS':
      console.log('get books!!!')
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts
      })

    case 'CREATE_POST':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'CREATE_POST_SUCCESS':
      const { post, id } = action
      browserHistory.replace(`/posts/${id}`)
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts.push[post]
      })
    case 'CREATE_POST_FAILED':
      const { error } = action
      console.error('CREATE_POSTS_FAILED', error)
      return Object.assign({}, state, {
        isFetching: false,
        error
      })

    case 'SEARCH_BOOK':
      console.log('search:', action.text)
      return state
    // filter action
    case 'FILTER_BOOK':
      return Object.assign({}, state, { text: action.text })

    default:
      return state
  }
}
