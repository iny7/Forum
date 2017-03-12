import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

// import RootPageRoute from './routes/RootPageRoute'
// import PostRoute from './routes/PostRoute'
// import AccountRoute from './routes/AccountRoute'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Home from './home'
import Post from './posts'
import Message from './messages'
import Account from './account'
import './style.sass'

import { fetchPosts } from 'actions'

import { Provider, connect } from 'react-redux'
import configureStore from 'store/configureStore'

const App = ({ route, children, container, dispatch }) => {
  console.log(container)
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
App.propTypes = {
  route: React.PropTypes.object,
  children: React.PropTypes.element,
  dispatch: React.PropTypes.func,
  container: React.PropTypes.object
}

const store = configureStore()

window.store = store

function getToken () {
  return store.getState().user.token
}

function getContainer (reducerName) {
  return connect((state) => {
    return {
      container: state[reducerName]
    }
  })(App)
}

const HomeContainer = getContainer('user')
const PostContainer = getContainer('post')
// const AccountContainer = getContainer('account')
// 发现这儿还是不能这么接! 还是把Header做成接收左右菜单的组件好了, 要复用这个还是比较不靠谱

const loginRequired = (nextState, replace) => {
  if (!getToken()) {
    replace('/signin')
  }
}

const ApplicationPage = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomeContainer}>
      <IndexRoute component={Home.Welcome} />
      <Route path="/users/sign_in" component={Home.SignIn} />
      <Route path="/signup" component={Home.SignUp} />
    </Route>
    <Route path="/posts" component={PostContainer} onEnter={loginRequired}>
      <IndexRoute
        onEnter={(nState) => {
          const { type } = nState.location.query
          store.dispatch(fetchPosts(type))
        }}
        onChange={(pState, nState) => {
          const { type } = nState.location.query
          store.dispatch(fetchPosts(type))
        }}
        component={Post.List} />
      <Route path="new" component={Post.New}></Route>
      <Route path="edit" component={Post.New}></Route>
      <Route path=":id" component={Post.Show}></Route>
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
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    <ApplicationPage />
  </Provider>, document.getElementById('app')
)
