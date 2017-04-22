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
const getUserMap = state => state.user
const getUserById = (state, userId) => state.user[userId]

const getPostByUserId = createSelector(
  [getPostList, getUserMap],
  (postList, userMap) => {
    const posts = postList.map(p => {
      return {
        ...p,
        author: userMap[p.author]
      }
    })
    return posts
  }
)

const getFollows = createSelector(
  [getUserMap, getUserById],
  (userMap, user) => {
    if (user && user.following) {
      return user.following.map(id => ({ ...userMap[id] }))
    } else {
      return []
    }
  }
)

const getFans = createSelector(
  [getUserMap, getUserById],
  (userMap, user) => {
    if (user && user.fans) {
      return user.fans.map(id => ({ ...userMap[id] }))
    } else {
      return []
    }
  }
)

// 使用redux-router 把router数据同步到store
export default {
  Follows: connect((state, router) => {
    const { params: { userId } } = router
    const userName = state.user[userId] && state.user[userId].name
    const follows = getFollows(state, userId)
    return { follows, userName, userId }
  })(Follows),

  Fans: connect((state, router) => {
    const { params: { userId } } = router
    const userName = state.user[userId] && state.user[userId].name
    const fans = getFans(state, userId)
    return { fans, userName, userId }
  })(Fans),

  Posts: connect((state, router) => {
    const { params: { userId } } = router
    const userName = state.user[userId] && state.user[userId].name
    const posts = getPostByUserId(state, userId)
    return { posts, userName, userId }
  })(Posts),

  Comments: connect((state) => ({
    ui: state.ui,
    data: state.post,
    isLoading: state.common.isLoading
  }))(Comments)
}
