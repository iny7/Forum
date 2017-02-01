import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Header from '../common/Header'
import Footer from '../common/Footer'

import PostRoutes from '../posts'
import AccountRoutes from '../account'
import MessageRoutes from '../messages'

// TODO: root应使用动态路由, 已经登录进入主页, 没有登录进入登录页面
const App = ({ route, routes, children }) => {
  const { title, headerRight } = children.type
  console.log(children)
  return (
    <div className="application-page">
      <Header {...{title, headerRight}} />
      {children}
      <Footer />
    </div>
  )
}

export default function RootPageRoute () {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={PostRoutes.List} />
      <Route path="posts" component={PostRoutes.List}></Route>
      <Route path="messages" component={MessageRoutes.List}></Route>
      <Route path="account" component={AccountRoutes.Account}></Route>
    </Route>
  )
}
