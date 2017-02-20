import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

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

import { Provider, connect } from 'react-redux'
import configureStore from 'store/configureStore'

const App = ({ route, children, container, dispatch }) => {
  const isRoot = ['/', '/posts', 'account'].indexOf(route.path) !== -1
  if (children) {
    var { title, needBack, HeaderRight } = children.type
  }
  return (
    <div className="application-page">
      <Header {...{title, needBack, HeaderRight}} />
      {React.cloneElement(children || <div />, {container, dispatch})}
      { isRoot ? <Footer /> : null }
    </div>
  )
}
App.propTypes = {
  route: React.PropTypes.object,
  children: React.PropTypes.element,
  dispatch: React.PropTypes.func,
  container: React.PropTypes.object
}

const PostContainer = connect((state) => {
  return {
    container: state.post
  }
})(App)

const ApplicationPage = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute name="hehe" component={Welcome} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Route>
    <Route path="/posts" component={PostContainer}>
      <IndexRoute component={Post.List} />
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
  <Provider store={configureStore()}>
    <ApplicationPage />
  </Provider>, document.getElementById('app')
)
