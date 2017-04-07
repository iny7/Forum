import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { Scene, Router } from 'react-native-router-flux'

import TabIcon from 'components/TabIcon'

import Home from './home'
import Post from './posts'
import Message from './messages'
import Account from './account'

// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  }
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64
    style.marginBottom = computedProps.hideTabBar ? 0 : 50
  }
  return style
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#f8f8f8',
  },
  tabBarSelectedItemStyle: {
  },
})

export default class Application extends Component {
  render () {
    return (
      <Router getSceneStyle={getSceneStyle}>
        <Scene key="root">
          <Scene key="home" hideNavBar hideTabBar>
            {/* 欢迎 */}
            <Scene key="welcome" component={Home.Welcome} />
            {/* 登录 */}
            <Scene key="signin" direction="vertical" component={Home.SignIn} title="Register" />
            {/* 注册 */}
            <Scene key="signup" direction="vertical" component={Home.SignUp} title="Login" />
          </Scene>

          <Scene key="main" tabs initial
            tabBarStyle={styles.tabBarStyle}
            tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>
            <Scene key="posts" icon={TabIcon}>
              {/* 文章列表 */}
              <Scene initial title="首页" key="post-list" component={Post.List} />
              {/* 文章详情 */}
              <Scene key="post-show" title="详情" component={Post.Show} />
            </Scene>


            {/* 私信 */}
            <Scene key="messages" title="私信" component={Message.List} icon={TabIcon} />
            {/* 我的 */}
            <Scene key="account" hideNavBar component={Account.Account} icon={TabIcon} />
          </Scene>

        </Scene>
      </Router>
    )
  }
}
