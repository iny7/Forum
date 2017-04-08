import React, { Component } from 'react'

import { Image, StyleSheet, Text, TouchableHighlight, PanResponder,
  ScrollView, TouchableOpacity, StatusBar, SegmentedControlIOS,View
} from 'react-native'

// import { Container, Content, Left, Body, Right, Icon, List, ListItem, Thumbnail } from 'native-base'
import { Actions } from 'react-native-router-flux'

import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'
import { View as AnimatableView } from 'react-native-animatable'
import { List, ListItem } from 'react-native-elements'

import rem from 'images/rem.png'
import source from 'images/cmw.jpg'

// import Icon from 'react-native-vector-icons/Ionicons'
import Util from 'Forum/src/utils'

import styless from './styles'

const styles1 = StyleSheet.create({
  header: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bg: {
    width: '100%',
    height: '100%'
  },
})
const renderHeader = (props) => {
  // alert(Object.keys(props).join(','))
  // alert(props._offset)
  return (
    <View style={styles1.header}>
      <Image source={rem} blurRadius={10} style={styles1.bg} />
    </View>
  )
}

const avatarWidth = 80
const styles2 = StyleSheet.create({
  navbar: {
    position: 'absolute',
    top: 0,
    paddingTop: 18,
    width: '100%',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 18
  },
  avatar: {
    position: 'absolute',
    bottom: 80,
    left: '50%',
    width: avatarWidth,
    height: avatarWidth,
    marginLeft: -avatarWidth / 2,
    borderRadius: avatarWidth / 2,
  }
})

const renderForeground = () => {
  return (
    <View style={styles1.header}>
      <View style={styles2.navbar}>
        <Text style={styles2.title}>我的</Text>
      </View>
      <Image source={source} style={styles2.avatar} />
    </View>
  )
}

const styles3 = StyleSheet.create({
  image: {
    height: 230,
    width: '100%',
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  keywords: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  keywordContainer: {
    backgroundColor: '#999999',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  keyword: {
    fontSize: 16,
    color: 'white',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    height: 600,
  },
})
const renderFixedForeground = () => {
  return (
    <Animatable.View
      style={styles3.navTitleView}
      ref={(navTitleView) => { this.navTitleView = navTitleView }}>
      <Text style={styles3.navTitle}>123</Text>
    </Animatable.View>
  )
}

export default class Account extends Component{
  componentDidMount() {
    StatusBar.setBarStyle(0)
  }
  renderFixedForeground = () => (
    <AnimatableView style={styles3.navTitleView}
      ref={(ref) => { this.navTitleView = ref }}>
      <Text style={styles3.navTitle}>12344</Text>
    </AnimatableView>
  )
  handleFollowing = () => {
    Actions.following
  }
  handleFollowers = () => {
    Actions.followings
  }
  handlePosts = () => {
    Actions.followings
  }
  render() {
    return(
      <HeaderImageScrollView
        minHeight={64} maxHeight={230}
        minOverlayOpacity={0.3} maxOverlayOpacity={0.6}
        fadeOutForeground
        renderHeader={renderHeader}
        renderForeground={renderForeground}
        renderFixedForeground={this.renderFixedForeground}>

        <TriggeringView
          onBeginHidden={() => {
            this.navTitleView.fadeInUp(200)
          }}
          onDisplay={() => {
            this.navTitleView.fadeOut(200)
          }}>
        </TriggeringView>

        {/* 关注 / 粉丝 / 帖子 */}
        <View style={styless.infoBar}>
          <TouchableOpacity style={styless.info} onPress={this.handleFollowing}>
            <Text style={styless.num}>22</Text>
            <Text style={styless.label}>关注</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styless.info} onPress={this.handleFollowers}>
            <Text>5</Text>
            <Text>粉丝</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styless.info} onPress={this.handlePosts}>
            <Text>399</Text>
            <Text>帖子</Text>
          </TouchableOpacity>
        </View>

        <View>
          <List containerStyle={styless.list}>
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
              onPress={() => { alert(1)}}
            />
          </List>
        </View>

      </HeaderImageScrollView>
    )
  }
}
