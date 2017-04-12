import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'

import IconButton from 'components/IconButton'

import styles from './styles'
import source from 'images/zzq.jpg'

export default class CommentItem extends Component {
  render () {
    return (
      <View style={styles.comment}>
        <View style={styles.commentLeft}>
          <Image source={source} style={styles.avatar}></Image>
        </View>
        <View style={styles.commentRight}>
          <View style={styles.info}>
            <Text style={styles.name}>小明</Text>
            <IconButton name="heart" color={'red'} label={6} style={styles.like} />
          </View>
          <Text style={styles.time}>12月13日 21:43</Text>
          <Text style={styles.content}>如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它。</Text>
        </View>
      </View>
    )
  }
}
