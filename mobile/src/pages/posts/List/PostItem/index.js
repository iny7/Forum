import React, { Component } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'

import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'

import source from 'images/cmw.jpg'
import styles from './styles'

export default class PostItem extends Component {
  handleEnter = () => {
    Actions['post-show'](this.props.post.id)
  }
  handleMore = () => {
    alert('more ')
  }
  render () {
    return (
      <TouchableOpacity style={styles.container} onPress={this.handleEnter}>
        <View style={styles.header}>
          <View transparent style={styles.userInfo}>
            <Image style={styles.avatar} source={source}></Image>
            <Text style={styles.author}>名字</Text>
          </View>
          <TouchableOpacity style={styles.more} onPress={this.handleMore}>
            <Icon name="ellipsis-h" size={18} color="#333"></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>请教下，PostCSS和rework有什么区别区区别...</Text>
          <Text style={styles.content}>如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.action}>
            <Icon style={styles.icon} name="heart" />
            <Text>12</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Icon style={styles.icon} name="comment" />
            <Text>4</Text>
          </TouchableOpacity>
          <Text style={styles.time}>2017/4/6 23:07</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
