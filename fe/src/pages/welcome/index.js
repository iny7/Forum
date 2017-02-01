import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Welcome from './Welcome'
import SignIn from './SignIn'
import SignUp from './SignUp'
import './style.sass'

// TODO: root应使用动态路由, 已经登录进入主页, 没有登录进入登录页面
// 使用() => () 省去一个return
const WelcomePage = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Welcome} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Route>
  </Router>
)

ReactDOM.render(<WelcomePage />, document.getElementById('app'))
// ReactDOM.render(<div className="hehe">heheh</div>, document.getElementById('app'))
