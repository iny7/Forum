import { connect } from 'react-redux'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Welcome from './Welcome'

export default {
  Welcome: connect(state => {
    return {
      state
    }
  })(Welcome),
  SignIn: connect(state => {
    return {
      state
    }
  })(SignIn),
  SignUp: connect(state => {
    return {
      state
    }
  })(SignUp)
}
