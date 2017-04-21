import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import Follows from './Follows'
import Fans from './Fans'
import Posts from './Posts'
import Comments from './Comments'

const getPostList = (state, userId) => {
  const posts = Object.values(state.post)
  return posts.filter(p => p.author == userId) // string <=> int
}
const getUser = state => state.user

const getPostByUserId = createSelector(
  [getPostList, getUser],
  (postList, userMap) => {
    console.log('calc..', postList)
    const posts = postList.map(p => {
      return {
        ...p,
        author: userMap[p.author]
      }
    })
    return posts
  }
)

// 使用redux-router 把router数据同步到store
export default {
  Follows: connect((state) => ({
    ui: state.ui,
    data: state.post,
    isLoading: state.common.isLoading
  }))(Follows),
  Fans: connect((state) => ({
    ui: state.ui,
    data: state.post,
    isLoading: state.common.isLoading
  }))(Fans),
  Posts: connect((state, router) => {
    const { params: { userId } } = router
    const posts = getPostByUserId(state, userId)
    return { posts, userId }
  })(Posts),
  Comments: connect((state) => ({
    ui: state.ui,
    data: state.post,
    isLoading: state.common.isLoading
  }))(Comments)
}
