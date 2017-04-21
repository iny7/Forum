import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import New from './New'
import Show from './Show'
import List from './List'

import './style.sass'

const getPostList = (state, category) => {
  const posts = Object.values(state.post)
  return posts.filter(p => p.category === category)
}
const getPost = (state, id) => state.post[id]
const getUser = state => state.user
const getComment = state => state.comment

// 根据category选出文章列表
const selectPostByCategory = createSelector(
  [getPostList, getUser],
  (postList, userMap) => {
    const posts = postList.map(p => {
      return {
        ...p,
        author: userMap[p.author]
      }
    }).sort((a, b) => {
      // 新发表在前
      return new Date(a.created_at) < new Date(b.created_at)
    })
    return posts
  }
)

// 根据id选出文章
const selectPostById = createSelector(
  [getPost, getUser, getComment],
  (post, userMap, commentMap) => {
    if (!post) return
    const author = userMap[post.author]
    const comments = post.comments.map(id => commentMap[id])

    return {
      ...post,
      author,
      comments
    }
  }
)

// 使用redux-router 把router数据同步到store
export default {
  List: connect((state, router) => {
    const { category = 'newest' } = router.location.query
    const posts = selectPostByCategory(state, category)
    return { category, posts }
  })(List),

  Show: connect((state, router) => {
    const { id } = router.params
    const post = selectPostById(state, id)
    return { id, post }
  })(Show),

  New: connect((state) => ({
    data: state.post,
    // ui: state.ui,
    // isLoading: state.common.isLoading
  }))(New)
}
