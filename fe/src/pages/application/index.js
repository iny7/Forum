import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Redirect, IndexRedirect, browserHistory } from 'react-router'


// import RootPageRoute from './routes/RootPageRoute'
// import PostRoute from './routes/PostRoute'
// import AccountRoute from './routes/AccountRoute'

import Header from './common/Header'
import Footer from './common/Footer'

import Post from './posts'
import Message from './messages'
import Account from './account'

const App = ({ route, routes, children }) => {
  if (children) {
    var { title, needBack, HeaderRight } = children.type
  }
  return (
    <div className="application-page">
      <Header {...{title, needBack, HeaderRight}} />
      {children}
      <Footer />
    </div>
  )
}
const AppWithoutFooter = ({ route, routes, children }) => {
  if (children) {
    var { title, HeaderRight } = children.type
  }
  return (
    <div className="application-page">
      <Header {...{title, HeaderRight}} />
      {children}
    </div>
  )
}

import './style.sass'
// 使用() => () 省去一个return
const ApplicationPage = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="posts" component={Post.List} />
      <Route path="messages" component={Message.List} />
      <Route path="account" component={Account.Account} />
    </Route>
    <Route path="/posts" component={AppWithoutFooter}>
      <Route path="new" component={Post.New}></Route>
      <Route path="edit" component={Post.New}></Route>
      <Route path=":id" component={Post.Show}></Route>
    </Route>
    <Route path="/messages" component={AppWithoutFooter}>
      <Route path=":id" component={Message.Show}></Route>
      <Route path="new" component={Message.New}></Route>
      <Route path="edit" component={Message.Edit}></Route>
    </Route>
    <Route path="/account" component={AppWithoutFooter}>
      <Route path="edit" component={Account.Edit}></Route>
      <Route path="settings" component={Account.Settings}></Route>
    </Route>
  </Router>
)

ReactDOM.render(<ApplicationPage />, document.getElementById('app'))
