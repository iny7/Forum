import React, { Component } from 'react'

import { Image, View, Text, TouchableOpacity } from 'react-native'

import { Actions } from 'react-native-router-flux'

import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'
import { View as AnimatableView } from 'react-native-animatable'
import { List, ListItem } from 'react-native-elements'

import MyImage from 'components/MyImage'

import rem from 'images/rem.png'

import styles from './styles'

export default class Account extends Component {
  // TODO 这个学习完Animation后, 再删掉
  renderFixedForeground = () => (
    <AnimatableView
      ref={(ref) => { this.navTitleView = ref }}>
      <Text>12344</Text>
    </AnimatableView>
  )
  renderHeader = () => (
    <Image source={rem} blurRadius={10} style={styles.bg} />
  )
  renderForeground = () => (
    <View style={styles.header}>
      <MyImage src={'/images/avatar2.png'} size={80} />
      <Text style={styles.name}>秦长熙</Text>
    </View>
  )
  handleFollowing = () => {
    Actions.following()
  }
  handleFollowers = () => {
    Actions.followers()
  }
  handlePosts = () => {
    Actions.myPosts()
  }
  handleSignout = () => {
    this.props.dispatch({ type: 'signout:request' })
  }
  render() {
    return(
      <View style={{ position: 'absolute', top: 0 }}>

        <HeaderImageScrollView
          minHeight={64} maxHeight={230}
          minOverlayOpacity={0.3} maxOverlayOpacity={0.6}
          fadeOutForeground
          renderHeader={this.renderHeader}
          renderForeground={this.renderForeground}>

          <TriggeringView>
          </TriggeringView>

          {/* 关注 / 粉丝 / 帖子 */}
          <View style={styles.infoBar}>
            <TouchableOpacity style={styles.info} onPress={this.handleFollowing}>
              <Text style={styles.num}>2</Text>
              <Text style={styles.label}>关注</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.info} onPress={this.handleFollowers}>
              <Text>1</Text>
              <Text>粉丝</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.info} onPress={this.handlePosts}>
              <Text>22</Text>
              <Text>帖子</Text>
            </TouchableOpacity>
          </View>

          <View>
            <List containerStyle={styles.list}>
              <ListItem
                title={'个人资料'}
                leftIcon={{ name: 'account-circle' }}
                onPress={() => { alert(1)}}
              />
              <ListItem
                title={'收藏'}
                leftIcon={{ name: 'star' }}
                onPress={() => { alert(1)}}
              />
              <ListItem
                title={'黑名单'}
                leftIcon={{ name: 'block' }}
                onPress={() => { alert(1)}}
              />
              <ListItem
                title={'退出登录'}
                leftIcon={{ name: 'exit-to-app' }}
                onPress={this.handleSignout}
              />
            </List>
          </View>

          <View style={{ height: 400 }}></View>

        </HeaderImageScrollView>
      </View>
    )
  }
}
