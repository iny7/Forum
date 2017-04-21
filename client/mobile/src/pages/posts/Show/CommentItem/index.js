import React, { Component } from 'react'
import { View, Text } from 'react-native'

import sdf from 'my-lib/utils/sdf'

import MyImage from 'components/MyImage'
import IconButton from 'components/IconButton'
import styles from './styles'

export default class CommentItem extends Component {
  render () {
    const { comment } = this.props
    const { commenter, avatar, content, created_at } = comment

    return (
      <View style={styles.comment}>
        <View style={styles.commentLeft}>
          <MyImage size={40} src={avatar} />
        </View>
        <View style={styles.commentRight}>
          <View style={styles.info}>
            <Text style={styles.name}>{commenter}</Text>
            <IconButton name="heart" color={'red'} label={6} style={styles.like} />
          </View>
          <Text style={styles.time}>{sdf(created_at)}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
    )
  }
}
