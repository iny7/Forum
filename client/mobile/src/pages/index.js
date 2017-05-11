import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Scene, Router } from 'react-native-router-flux'

import TabIcon from 'components/TabIcon'

import styles from './styles'

import Home from './home'
import Post from './posts'
import Message from './messages'
import Account from './account'

const RouterWithRedux = connect()(Router)

// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  }
  const sceneName = props.scene.navigationState.name
  // "我的"页面使用fixed Navbar, 所以不需要marginTop
  const isMinePage = ['mine'].indexOf(sceneName) !== -1
  // StatusBar.setBarStyle(isMinePage ? 'light-content' : 'dark-content')
  // StatusBar.setBarStyle('dark-content')

  const noMarginTop = computedProps.hideNavBar || isMinePage
  const noMarginBottom = computedProps.hideTabBar
  if (computedProps.isActive) {
    style.marginTop = noMarginTop ? 0 : 64
    style.marginBottom = noMarginBottom ? 0 : 50
  }
  return style
}

export default class Application extends Component {
  render () {
    return (
      <RouterWithRedux
        getSceneStyle={getSceneStyle}
        /* 顶栏样式 */
        titleStyle={styles.navBarTitle}
        navigationBarStyle={styles.navBar}
        barButtonTextStyle={styles.barButtonTextStyle}
        barButtonIconStyle={styles.barButtonIconStyle}
        /* 底栏样式 */
        tabBarStyle={styles.tabBarStyle}
        tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>

        <Scene key="root">
          {/* 登录前 */}
          <Scene initial key="home" hideNavBar hideTabBar>
            {/* 欢迎 */}
            <Scene initial key="welcome" component={Home.Welcome} />
            {/* 登录 */}
            <Scene  key="signin" direction="vertical" component={Home.SignIn} title="Register" />
            {/* 注册 */}
            <Scene  key="signup" direction="vertical" component={Home.SignUp} title="Login" />
          </Scene>

          {/* 登录后 */}
          <Scene key="main" tabs>
            {/* 文章 */}
            <Scene key="posts" icon={TabIcon}>
              {/* 文章列表 */}
              <Scene title="首页" key="post-list" component={Post.List} />
              {/* 文章详情 */}
              <Scene key="post-show" title="详情" component={Post.Show} />
            </Scene>

            {/* 私信 */}
            {/*
              <Scene key="messages" title="私信" component={Message.List} icon={TabIcon} />
            */}

            {/* 我的 */}
            <Scene key="account" icon={TabIcon}>
              <Scene key="mine" title="我的" titleStyle={{ color: 'white' }} navigationBarStyle={styles.fixedNavBar} component={Account.Account}></Scene>
              <Scene key="following" title="关注" component={Account.Following}></Scene>
              <Scene key="followers" title="粉丝" component={Account.Followers}></Scene>
              <Scene key="myPosts" title="发表" component={Account.Followers}></Scene>
            </Scene>

          </Scene>
        </Scene>
      </RouterWithRedux>
    )
  }
}
