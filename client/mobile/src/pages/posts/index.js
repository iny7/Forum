import { connect } from 'react-redux'
import New from './New'
import Show from './Show'
import List from './List'

export default {
  List: connect(state => {
    const posts = Object.values(state.post.map)
    return {
      posts
    }
  })(List),
  Show: connect(state => {
    return state
  })(Show),
  New: connect(state => {
    return state
  })(New),
}
