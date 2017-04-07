import React, {Component} from 'react'
import {
  StyleSheet,
  TabBarIOS,
  Icon,
  Text
} from 'react-native'

export default class Footer extends Component {
  render() {
    return (
      <TabBarIOS
        barTintColor="#fff"
        tintColor="#1b95e0">
        <Icon.TabBarItem
        title="主页"
        iconName="ios-home-outline"
        selectedIconName="ios-home"
        onPress={ () => this.changeTab('主页') }
        selected={ this.state.selectedTab === '主页' }>
          <Text>主页</Text>
        </Icon.TabBarItem>
        <Icon.TabBarItem
        title="通知"
        iconName="ios-notifications-outline"
        selectedIconName="ios-notifications"
        onPress={ () => this.changeTab('通知') }
        selected={ this.state.selectedTab === '通知'}>
          <Text>通知</Text>
        </Icon.TabBarItem>
        <Icon.TabBarItem
        title="私信"
        iconName="ios-mail-outline"
        selectedIconName="ios-mail"
        onPress={ () => this.changeTab('私信') }
        selected={ this.state.selectedTab === '私信'}>
          <Text>私信</Text>
        </Icon.TabBarItem>
        <Icon.TabBarItem
        title="我"
        iconName="ios-person-outline"
        selectedIconName="ios-person"
        onPress={ () => this.changeTab('我') }
        selected={ this.state.selectedTab === '我'}>
          <Text>我</Text>
        </Icon.TabBarItem>
      </TabBarIOS>
    )
  }
}
