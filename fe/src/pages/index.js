import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, Redirect, browserHistory } from 'react-router'

import Home from './home'
import Post from './posts'
import Message from './messages'
import Account from './account'
import User from './users'
import './style.sass'

import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'

const store = configureStore()
window.store = store

function getToken () {
  return store.getState().user.token
}

function loginRequired (nextState, replace) {
  if (!getToken()) {
    replace('/users/signin')
  }
}
function loginRedirect (nextState, replace) {
  if (getToken()) {
    replace('/posts')
  }
}

const ApplicationPage = () => (
  <Router history={browserHistory}>
    <Route path="/" onEnter={loginRedirect}>
      <IndexRoute component={Home.Welcome} />
      <Route path="/users/sign_in" component={Home.SignIn} />
      <Route path="/users/sign_up" component={Home.SignUp} />
    </Route>
    <Route onEnter={loginRequired}>
      <Route path="/posts" onEnter={() => { document.body.className = 'posts-page' }}>
        <IndexRoute component={Post.List} />
        <Route path="new" component={Post.New}></Route>
        <Route path="edit" component={Post.New}></Route>
        <Route path=":id" component={Post.Show}></Route>
      </Route>
      <Route path="/messages" onEnter={() => { document.body.className = 'messages-page' }}>
        <IndexRoute component={Message.List} />
        <Route path=":id" component={Message.Show}></Route>
        <Route path="new" component={Message.New}></Route>
        <Route path="edit" component={Message.Edit}></Route>
      </Route>
      <Route path="/account" onEnter={() => { document.body.className = 'account-page' }}>
        <IndexRoute component={Account.Account} />
        <Route path="edit" component={Account.Edit}></Route>
        <Route path="settings" component={Account.Settings}></Route>
      </Route>
      <Route path="/users/:id" onEnter={() => { document.body.className = '' }}>
        <IndexRoute component={null} />
        <Route path="posts" component={User.Posts}></Route>
        <Route path="comments" component={User.Comments}></Route>
        <Route path="follows" component={User.Follows}></Route>
        <Route path="fans" component={User.Fans}></Route>
      </Route>
      <Redirect from='*' to='/' />
    </Route>
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    <ApplicationPage />
  </Provider>, document.getElementById('app')
)
