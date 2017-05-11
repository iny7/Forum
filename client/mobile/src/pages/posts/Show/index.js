import React, { Component } from 'react'
import sdf from 'my-lib/utils/sdf'
import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native'

// import AutoHeightWebView from 'react-native-autoheight-webview'

import MyImage from 'components/MyImage'
import IconButton from 'components/IconButton'

import CommentItem from './CommentItem'
import styles from './styles'

export default class PostShow extends Component {
  constructor () {
    super()
    this.state = {
      loading: true
    }
  }
  componentWillMount () {
    this.setState({ loading: true })
    const { id, dispatch } = this.props
    dispatch({ type: 'fetch:post:by:id', payload: { id } })
  }
  componentWillReceiveProps (nProps) {
    if (nProps.post && this.state.loading) {
      this.setState({ loading: false })
    }
  }
  render () {
    // TODO loading => store
    const { loading } = this.state
    return loading ? this.renderLoading() : this.renderPost()
  }
  renderLoading = () => (
    <View>
      <Text>{'loading...'}</Text>
      <Text>{'loading...'}</Text>
      <Text>{'loading...'}</Text>
      <Text>{'loading...'}</Text>
      <Text>{'loading...'}</Text>
      <Text>{'loading...'}</Text>
    </View>
  )
  renderPost = () => {
    const { post } = this.props
    const { author, comments, title, content, created_at, liked, likes_count } = post
    console.log(comments)
    const likeIcon = liked ? 'heart' : 'heart-o'
    return (
      <ScrollView style={styles.page}>

        {/* 文章标题 */}
        <Text style={styles.postTitle}>{title}</Text>

        {/* 文章信息 */}
        <View style={styles.postInfo}>
          <TouchableOpacity style={styles.author}>
            <MyImage size={24} src={author.avatar} />
            <Text style={styles.name}>{author.nickname}</Text>
          </TouchableOpacity>
          <Text style={styles.time}>{sdf(created_at)}</Text>
          {/* <Text style={styles.opens}>阅读 4521</Text> */}
        </View>

        {/* 文章内容 */}
        {/*<AutoHeightWebView style={styles.postContent} source={{ html }} />*/}
        <View style={styles.postContent}>
          <Text>{content}</Text>
        </View>

        {/* 文章赞数 */}
        <IconButton name={likeIcon} color={'red'} label={12} style={styles.like} />
        <Text>{likes_count}</Text>

        {/* 评论列表 */}
        <View style={styles.comments}>
          <Text style={styles.commentCount}>评论 4</Text>
          { comments.map((c, i) => {
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
