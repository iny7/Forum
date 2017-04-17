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
    }
  })(List),
  Show: connect((state) => {
    const pathArr = state.routing.locationBeforeTransitions.pathname.split('/')
    const id = pathArr[pathArr.length -1]
    const post = state.post.map[id]
    return {
      post
    }
  })(Show),
  New: connect((state) => ({
    data: state.post,
    // ui: state.ui,
    // isLoading: state.common.isLoading
  }))(New)
}
