import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import Account from './Account'
import Settings from './Settings'
import Profile from './Profile'

const getUser = (state, userId) => state.user[userId]
const getProfileById = createSelector(
  [getUser],
  (user) => {
    return { ...user }
  }
)

export default {
  Account: connect((state, router) => {
    const { params: { userId = MB.currentUser().id } } = router
    const user = getProfileById(state, userId)
    return { userId, user }
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
