import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import PostItem from 'components/PostItem'
import Spiner from 'components/Spiner'

export default class Posts extends Component {
  state = {
    loading: true
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
    const { userName, posts } = this.props
    const title = userName ? `${userName}的帖子` : '加载中'
    return (
      <div className="application-page">
        <Header title={title} />
        <main className="cx-body">
          { loading ? <Spiner /> : (
            posts.map((p, i) => <PostItem key={i} post={p} />)
          ) }
        </main>
        <Footer />
      </div>
    )
  }
}
