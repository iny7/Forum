import React, { Component } from 'react'
import sdf from 'my-lib/utils/sdf'
import { View, Image, TouchableOpacity, Text } from 'react-native'

import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

export default class PostItem extends Component {
  handleEnter = () => {
    Actions['post-show'](this.props.post.id)
  }
  handleMore = () => {
    alert('more ')
  }
  render () {
    const { post } = this.props
    const { title, author, content, comments, created_at, liked, likes_count } = post
    const likeIcon = liked ? 'heart' : 'heart-o'
    const prefix = 'http://127.0.0.1:3000'

    return (
      <TouchableOpacity style={styles.container} onPress={this.handleEnter}>
        <View style={styles.header}>
          <View transparent style={styles.userInfo}>
            <Image style={styles.avatar} source={{ uri: prefix + author.avatar }}></Image>
            <Text style={styles.author}>{author.name}</Text>
          </View>
        {/*
          <TouchableOpacity style={styles.more} onPress={this.handleMore}>
            <Icon name="ellipsis-h" size={18} color="#333"></Icon>
          </TouchableOpacity>
        */}
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.action}>
            <Icon style={styles.icon} name={likeIcon} />
            <Text>{likes_count}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <Icon style={styles.icon} name="comment" />
            <Text>{comments.length}</Text>
          </TouchableOpacity>
          <Text style={styles.time}>{sdf(created_at)}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
