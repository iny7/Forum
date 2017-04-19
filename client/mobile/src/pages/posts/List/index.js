import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import Swiper from 'react-native-swiper'
import { Container, Content, Tabs, Tab, Text } from 'native-base'

import PostItem from './PostItem'

// import Util from 'Forum/src/utils'
// const { width } = Util.size
const tabArr = ["最新", "精选", "匿名"]

// TODO 定制full button 的borderRadius为6
export default class PostList extends Component {
  componentWillMount () {
    // const category = 'newest'
    // this.props.dispatch({ type: 'fetch:post:by:category', payload: { category } })
  }
  render () {
    const { posts } = this.props
    console.log(posts)
    return (
      <Container>
        <Swiper
          autoplay
          height={200}
          showsButtons={false}>
          <View style={styles.slide1}>
            <Text style={style.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={style.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={style.text}>And simple</Text>
          </View>
        </Swiper>
        <Tabs>
          { tabArr.map((tabName, i) => {
            const posts = new Array(1 + Math.random() * 3 >> 0).fill('')
            return (
              <Tab key={i} heading={tabName}>
                <Content>
                  { posts.map((p, i) => {
                    return <PostItem key={i} post={p} />
                  }) }
                </Content>
              </Tab>
            )
          }) }
        </Tabs>
      </Container>
    )
  }
}
const style = {
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
}

var styles = StyleSheet.create({
  wrapper: {
    height: 200
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  }
})
