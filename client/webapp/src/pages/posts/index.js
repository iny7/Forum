import { connect } from 'react-redux'

import New from './New'
import Show from './Show'
import List from './List'

import './style.sass'

// 使用redux-router 把router数据同步到store
export default {
  List: connect((state) => {
    // console.log(state.post.map)
    const posts = Object.values(state.post.map)
    return {
      posts
    // ui: state.ui,
    // isLoading: state.common.isLoading
    }
  })(List),
  Show: connect((state) => ({
    data: state.post,
    // ui: state.ui,
    // isLoading: state.common.isLoading
  }))(Show),
  New: connect((state) => ({
    data: state.post,
    // ui: state.ui,
    // isLoading: state.common.isLoading
  }))(New)
}
