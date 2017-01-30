import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

import RootPageRoute from './routes/RootPageRoute'
import PostRoute from './routes/PostRoute'

// 使用() => () 省去一个return
const ApplicationPage = () => (
  <Router history={browserHistory}>
    {RootPageRoute()}
    {PostRoute()}
  </Router>
)

ReactDOM.render(<ApplicationPage />, document.getElementById('app'))
