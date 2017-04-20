import { connect } from 'react-redux'

import New from './New'
import Show from './Show'
import List from './List'

import './style.sass'

// 使用redux-router 把router数据同步到store
export default {
  List: connect((state, router) => {
    const { category = 'newest' } = router.location.query
    const posts = Object.values(state.post).filter(p => p.category === category)
    console.log(posts.length)
    return { posts, category }
  })(List),

  Show: connect((state, router) => {
    const { params: { id } } = router
    const { user, post, comment } = state
    // connect的是store中flat的数据, 可以避免不必要的render
    const p = post[id]
    let author = {}, comments = []
    if (p) {
      author = user[p.author]
      comments = p.comments.map(id => comment[id])
    }
    return { id, post: p, author, comments }
  })(Show),

  New: connect((state) => ({
    data: state.post,
    // ui: state.ui,
    // isLoading: state.common.isLoading
  }))(New)
}
