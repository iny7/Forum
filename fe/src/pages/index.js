import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Home from './home'
import Post from './posts'
import Message from './messages'
import Account from './account'
import './style.sass'

import { fetchPosts, fetchPost } from 'actions/post'

import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'

const App = ({ route, children, container, dispatch }) => {
  const needHeader = ['/', '/signin', '/signup'].indexOf(route.path) === -1
  const needFooter = ['/messages', '/posts', '/account'].indexOf(route.path) !== -1
  if (children) {
    var { title, needBack, HeaderRight } = children.type
  }
  return (
    <div className="application-page">
      { needHeader ? <Header {...{title, needBack, HeaderRight}} /> : null }
      { React.cloneElement(children || <div />, { container, dispatch }) }
      { needFooter ? <Footer /> : null }
    </div>
  )
}

const store = configureStore()
window.store = store

function getToken () {
  return store.getState().user.token
}

const loginRequired = (nextState, replace) => {
  if (!getToken()) {
    replace('/signin')
  }
}

const ApplicationPage = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Home.Welcome} />
      <Route path="/users/sign_in" component={Home.SignIn} />
      <Route path="/signup" component={Home.SignUp} />
    </Route>
    <Route onEnter={loginRequired}>
      <Route path="/posts" >
        <IndexRoute
          onEnter={(nState) => {
            const { type } = nState.location.query
            store.dispatch(fetchPosts(type))
          }}
          onChange={(pState, nState) => {
            const { type } = nState.location.query
            store.dispatch(fetchPosts(type))
          }}
          component={Post.List}
        />
        <Route path="new" component={Post.New}></Route>
        <Route path="edit" component={Post.New}></Route>
        <Route path=":id" component={Post.Show}
          onEnter={(nState, replace, next) => {
            const { id } = nState.params
            store.dispatch(fetchPost(id, next))
          }}
        />
      </Route>
      <Route path="/messages" component={App} onEnter={loginRequired}>
        <IndexRoute component={Message.List} />
        <Route path=":id" component={Message.Show}></Route>
        <Route path="new" component={Message.New}></Route>
        <Route path="edit" component={Message.Edit}></Route>
      </Route>
      <Route path="/account" component={App}>
        <IndexRoute component={Account.Account} onEnter={loginRequired}/>
        <Route path="edit" component={Account.Edit}></Route>
        <Route path="settings" component={Account.Settings}></Route>
      </Route>
    </Route>
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    <ApplicationPage />
  </Provider>, document.getElementById('app')
)
