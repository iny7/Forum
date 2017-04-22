import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import PostItem from 'components/PostItem'

export default class Posts extends Component {
  constructor () {
    super()
    this.state = {
      loading: true
    }
  }
  componentWillMount () {
    const { dispatch, userId } = this.props
    this.setState({ loading: true })
    dispatch({ type: 'fetch:post:by:userId', payload: { userId } })
  }
  componentWillReceiveProps (nProps) {
    if (nProps.posts.length) {
      this.setState({ loading: false })
    }
  }
  render () {
    const { loading } = this.state
    const { userName } = this.props
    const title = userName ? `${userName}的帖子` : '加载中'
    return (
      <div className="application-page">
        <Header title={title} />
        <main className="cx-body">
          { loading ? this.renderLoading() : this.renderPosts() }
        </main>
        <Footer />
      </div>
    )
  }
  renderLoading = () => (
    <div>
      <div>loading....</div>
      <div>loading....</div>
      <div>loading....</div>
    </div>
  )

  renderPosts () {
    const { posts } = this.props
    return posts.map((p, i) => <PostItem key={i} post={p} />)
  }
}
