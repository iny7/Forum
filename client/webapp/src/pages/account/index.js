import { connect } from 'react-redux'

import Account from './Account'
import Settings from './Settings'
import Profile from './Profile'

export default {
  Account: connect((state, router) => {
    const { params: { userId = MB.currentUser().id } } = router
    return { userId }
  })(Account),

  Settings: connect((state) => {
    return {
      ui: state.ui,
      data: state.user
    }
  })(Settings),
  Profile: connect((state, router) => {
    console.log(router)
    // if (router)
    // const { params: { id } } = router
    return {
      ui: state.ui,
      data: state.user
    }
  })(Profile)
}
