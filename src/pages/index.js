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
  // alert(Object.keys(props.scene).join(', '))
  // alert(Object.keys(props.navigationState).join(', '))
  // alert(props.navigationState.key, props.navigationState.sceneKey)
  // alert(Object.keys(props).join(', '))
  const sceneName = props.scene.navigationState.name
  console.log(sceneName)
  const isMinePage = ['mine'].indexOf(sceneName) !== -1

  const noMarginTop = computedProps.hideNavBar || isMinePage
  const noMarginBottom = computedProps.hideTabBar
  if (computedProps.isActive) {
    style.marginTop = noMarginTop ? 0 : 64
    style.marginBottom = noMarginBottom ? 0 : 50
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
  fixedNavBar: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0
  }
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

          <Scene key="main" tabs initial tabBarStyle={styles.tabBarStyle} tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>

            {/* 文章 */}
            <Scene key="posts" icon={TabIcon}>
              {/* 文章列表 */}
              <Scene title="首页" key="post-list" component={Post.List} />
              {/* 文章详情 */}
              <Scene initial key="post-show" title="详情" component={Post.Show} />
            </Scene>

            {/* 私信 */}
            <Scene key="messages" title="私信" component={Message.List} icon={TabIcon} />

            {/* 我的 */}
            <Scene key="account" icon={TabIcon}>
              <Scene key="mine" title="我的" navigationBarStyle={styles.fixedNavBar} component={Account.Account}></Scene>
              <Scene key="following" title="关注" component={Account.Following}></Scene>
              <Scene key="followers" title="粉丝" component={Account.Followers}></Scene>
              <Scene key="myPosts" title="发表" component={Account.Followers}></Scene>
            </Scene>

          </Scene>
        </Scene>
      </Router>
    )
  }
}
