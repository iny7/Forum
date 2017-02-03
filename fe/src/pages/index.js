import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, Redirect, IndexRedirect, browserHistory } from 'react-router'

// import RootPageRoute from './routes/RootPageRoute'
// import PostRoute from './routes/PostRoute'
// import AccountRoute from './routes/AccountRoute'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Welcome from './Welcome'
import SignIn from './SignIn'
import SignUp from './SignUp'

import Post from './posts'
import Message from './messages'
import Account from './account'
import './style.sass'

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

// 使用() => () 省去一个return
const ApplicationPage = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Welcome} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Route>
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
