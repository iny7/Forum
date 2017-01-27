import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App'
import SignIn from './SignIn'
import SignUp from './SignUp'

// 使用() => () 省去一个return
const Welcome = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Route>
  </Router>
)

ReactDOM.render(<Welcome />, document.getElementById('app'))
// ReactDOM.render(<div className="hehe">heheh</div>, document.getElementById('app'))
