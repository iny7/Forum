const initialState = {
  text: '',
  isFetching: false,
  didInvalidate: false,
  posts: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    // basic action
    case 'INVALIDATE_DATA':
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case 'REQUEST_POSTS':
      console.log('种类是')
      console.log(action.category)
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case 'RECEIVE_POSTS':
      console.log('get books!!!')
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        books: action.books, // declare in actions/index.js
        lastUpdated: action.receivedAt
      })
    case 'BORROW_POSTS':
      console.log('jie shu !!!!!!')
      return state

    // network action
    case 'FETCH_POSTS_REQUEST':
      console.log('reducers FETCH_BOOKS_REQUEST')
      return state
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
