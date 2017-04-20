import { connect } from 'react-redux'

import New from './New'
import Show from './Show'
import List from './List'

import './style.sass'

// 使用redux-router 把router数据同步到store
export default {
  List: connect(state => {
    const posts = Object.values(state.post)
    console.log(posts)
    return { posts }
  })(List),

  Show: connect((state, router) => {
    const { params: { id } } = router
    const { user, post, comment } = state
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
