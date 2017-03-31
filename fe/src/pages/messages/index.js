import { connect } from 'react-redux'
import List from './List'

export default {
  List: connect((state) => ({
    data: state.post
  }))(List)
}
