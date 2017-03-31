import { connect } from 'react-redux'

import New from './New'
import Show from './Show'
import List from './List'

import './style.sass'

// 使用redux-router 把router数据同步到store
export default {
  List: connect((state) => ({
    ui: state.ui,
    data: state.post,
    isLoading: state.common.isLoading
  }))(List),
  Show: connect((state) => ({
    ui: state.ui,
    data: state.post,
    isLoading: state.common.isLoading
  }))(Show),
  New: connect((state) => ({
    ui: state.ui,
    data: state.post,
    isLoading: state.common.isLoading
  }))(New)
}
