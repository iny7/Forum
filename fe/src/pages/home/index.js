import { connect } from 'react-redux'

import Welcome from './Welcome'
import SignUp from './SignUp'
import SignIn from './SignIn'

export default {
  Welcome: connect((state) => {
    return {
      ui: state.ui,
      data: state.user
    }
  })(Welcome),
  SignUp: connect((state) => {
    return {
      ui: state.ui,
      data: state.user
    }
  })(SignUp),
  SignIn: connect((state) => {
    return {
      ui: state.ui,
      data: state.user
    }
  })(SignIn)
}
