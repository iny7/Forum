import { connect } from 'react-redux'

import Follows from './Follows'
import Fans from './Fans'
import Posts from './Posts'
import Comments from './Comments'

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
  Posts: connect((state) => ({
    ui: state.ui,
    data: state.post,
    isLoading: state.common.isLoading
  }))(Posts),
  Comments: connect((state) => ({
    ui: state.ui,
    data: state.post,
    isLoading: state.common.isLoading
  }))(Comments)
}
