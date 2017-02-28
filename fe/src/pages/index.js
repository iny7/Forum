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

const HomeContainer = connect((state) => {
  return {
    container: state.user
  }
})(App)

const PostContainer = connect((state) => {
  return {
    container: state.post
  }
})

const ApplicationPage = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomeContainer}>
      <IndexRoute component={Home.Welcome} />
      <Route path="/signin" component={Home.SignIn} />
      <Route path="/signup" component={Home.SignUp} />
    </Route>
    <Route path="/posts" component={PostContainer}>
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
    <Route path="/messages" component={App}>
      <IndexRoute component={Message.List} />
      <Route path=":id" component={Message.Show}></Route>
      <Route path="new" component={Message.New}></Route>
      <Route path="edit" component={Message.Edit}></Route>
    </Route>
    <Route path="/account" component={App}>
      <IndexRoute component={Account.Account} />
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
