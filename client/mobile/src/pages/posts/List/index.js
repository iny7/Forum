import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, View, Text } from 'react-native'

import Swiper from 'react-native-swiper'
// import { TabViewAnimated, TabBar } from 'react-native-tab-view'

import PostItem from 'components/PostItem'

import styles from './styles'

const tabArr = [
  { key: 'newest', title: '最新' },
  { key: 'picked', title: '精选' },
  { key: 'anonymous', title: '匿名' },
]

export default class PostList extends Component {
  constructor () {
    super()
    this.state = {
      index: 0
    }
  }

  componentWillMount () {
    const { index } = this.state
    const category = tabArr[index].key
    this.category = category
    this.fetchData(category)
  }
  componentWillUpdate (nProps, nState) {
    const { index } = nState
    const category = tabArr[index].key
    if (category !== this.category) {
      this.category = category
      this.fetchData(category)
    }
  }
  fetchData (category) {
    this.props.dispatch({ type: 'fetch:post:by:category', payload: { category } })
  }
  handleChangeTab = (index) => {
    this.setState({ index })
  }
  render () {
    const posts = this.props.posts.filter(p => p.category === this.category)
    return (
      <ScrollView>
        <Swiper autoplay height={200} showsButtons={false}>
          <View style={styles.headline}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.headline}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.headline}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <View style={styles.tabs}>
          { tabArr.map(({ key, title }, index) => {
            const style = [ styles.tab ]
            if (index === this.state.index) {
              style.push(styles.activeTab)
            }
            return (
              <TouchableOpacity key={index} style={style} onPress={() => this.handleChangeTab(index) }>
                <Text>{title}</Text>
              </TouchableOpacity>
            )
          }) }
        </View>
        { posts.length ? this.renderPosts(posts) : this.renderLoading() }
      </ScrollView>
    )
  }
  renderLoading () {
    return (
      <View>
        <Text>Loading</Text>
        <Text>Loading</Text>
        <Text>Loading</Text>
      </View>
    )
  }
  renderPosts (posts) {
    return (
      <View>
        { posts.map((p, i) => {
          return <PostItem key={i} post={p} />
        }) }
      </View>
    )
  }
}
