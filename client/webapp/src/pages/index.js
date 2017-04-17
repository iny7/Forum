import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, Redirect, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Home from './home'
import Post from './posts'
import Message from './messages'
import Account from './account'
import User from './users'
import './style.sass'

import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const MB = {}
MB.posts = () => {
  return Object.values(store.getState().post.map)
}

// 方便debug
window.store = store
window.MB = MB

function getToken () {
  const userId = localStorage.getItem('userId')
  const email = localStorage.getItem('email')
  const token = localStorage.getItem('token')
  return userId && email && token
}

function loggedIn () {
  return store.getState().base.loggedIn
}

function loginRequired (nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/users/sign_in',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function logoutRequired (nextState, replace) {
  if (loggedIn()) {
    replace('/posts')
  }
}


// 可以在这里存一个变量, 等因为未登录被重定向时, 将请求的path赋值给该变量
// 然后, 使用subscribe监听loggedIn的action, 当loggedIn发生时,
// 根据该变量的值, 重定向回到之前请求的页面

// TODO 使用subscribe监听
// store.subscribe(handleStoreChange)

const ApplicationPage = () => (
  <Router history={history}>
    <Route name="home" path="/" onEnter={logoutRequired}>
      <IndexRoute component={Home.Welcome} />
      <Route path="users/sign_in" component={Home.SignIn} />
      <Route path="users/sign_up" component={Home.SignUp} />
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
    </Route>
    <Redirect from="*" to='/' />
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    <ApplicationPage />
  </Provider>, document.getElementById('app')
)
