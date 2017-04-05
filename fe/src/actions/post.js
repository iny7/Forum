import myFetch from 'utils/myFetch'

export function fetchPosts (category) {
  return (dispatch) => {
    dispatch({ type: 'fetching:data' })
    return myFetch.get({
      url: '/posts',
      data: category ? { type: category } : ''
    }).then(({ posts }) => {
      dispatch({ type: 'fetching:data:success' })
      dispatch({ type: 'RECEIVE_POSTS', payload: { posts } })
    })
  }
}

export function fetchPost (id, cb) {
  return (dispatch) => {
    dispatch({ type: 'fetching:data' })
    return myFetch.get({
      url: `/posts/${id}`
    }).then((result) => {
      const { post } = result
      cb && cb()
      dispatch({ type: 'fetching:data:success' })
      dispatch({ type: 'RECEIVE_POST', payload: { post } })
    })
  }
}

export function createPost (post, cb) {
  return (dispatch) => {
    dispatch({ type: 'fetching:data' })
    return myFetch.post({
      url: '/posts',
      data: { post }
    }).then((result) => {
      dispatch({ type: 'fetching:data:success' })
      if (result.status_code === 200) {
        const { post } = result
        dispatch({ type: 'CREATE_POST_SUCCESS', payload: { post } })
        cb && cb()
      } else {
        const { error } = result
        console.error('创建post失败了!!!!', error)
      }
    })
  }
}
