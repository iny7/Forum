import { connect } from 'react-redux'

import Account from './Account'
import Settings from './Settings'
import Edit from './Edit'

export default {
  Account: connect((state) => ({
    ui: state.ui,
    data: state.user
  }))(Account),
  Settings: connect((state) => ({
    ui: state.ui,
    data: state.user
  }))(Settings),
  Edit: connect((state) => ({
    ui: state.ui,
    data: state.user
  }))(Edit)
}
