import React, { Component } from 'react'
import { ScrollView, Image, View, Text, TouchableOpacity, TextInput } from 'react-native'
import AutoHeightWebView from 'react-native-autoheight-webview'

import IconButton from 'components/IconButton'

import CommentItem from './CommentItem'
import styles from './styles'
import source from 'images/zzq.jpg'

const html = `
  <p>如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...</p>
  <p>如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...</p>
  <p>如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...</p>
  <p>如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...</p>
  <p>如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...</p>
`

export default class PostShow extends Component {
  render () {
    return (
      <ScrollView style={styles.page}>

        {/* 文章标题 */}
        <Text style={styles.postTitle}>请教下，PostCSS和rework有什么区别区区别...</Text>

        {/* 文章信息 */}
        <View style={styles.postInfo}>
          <TouchableOpacity style={styles.author}>
            <Image source={source} style={styles.avatar}></Image>
            <Text style={styles.name}>作者名字</Text>
          </TouchableOpacity>
          <Text style={styles.time}>12月13日21:43</Text>
          <Text style={styles.opens}>阅读 4521</Text>
        </View>

        {/* 文章内容 */}
        <AutoHeightWebView style={styles.postContent} source={{ html }} />

        {/* 文章赞数 */}
        <IconButton name="heart" color={'red'} label={12} style={styles.like} />

        {/* 评论列表 */}
        <View style={styles.comments}>
          <Text style={styles.commentCount}>评论 4</Text>
          { [1, 2, 3].map((c, i) => {
            return <CommentItem key={i} comment={c} />
          }) }
        </View>

        {/* 创建评论 */}
        <View style={styles.commentArea}>
          <TextInput multiline numberOfLines={4} placeholder="点击输入评论"></TextInput>
        </View>

      </ScrollView>
    )
  }
}
