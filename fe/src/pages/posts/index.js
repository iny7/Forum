import { connect } from 'react-redux'

import New from './New'
import Show from './Show'
import List from './List'

import './style.sass'

// 使用redux-router 把router数据同步到store
export default {
  New: connect((state) => {
    return {
      ui: state.ui,
      data: state.post,
      isLoading: state.common.isLoading
    }
  })(New),
  Show: connect((state) => {
    return {
      ui: state.ui,
      data: state.post,
      isLoading: state.common.isLoading
    }
  })(Show),
  List: connect((state) => {
    return {
      ui: state.ui,
      posts: state.post,
      isLoading: state.common.isLoading
    }
  })(List)
}
