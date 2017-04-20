import React, { Component } from 'react'

import myFetch from 'utils/myFetch'
import Header from 'components/Header'
import Footer from 'components/Footer'
import PostItem from 'components/PostItem'

export default class Posts extends Component {
  state = {
    loading: true
  }
  componentWillMount () {
    myFetch.get({
      url: this.props.location.pathname
    }).then(posts => {
      this.setState({
        loading: false,
        posts
      })
    })
  }
  render () {
    const { loading } = this.state
    // console.log(this.renderPosts())
    return (
      <div className="application-page">
        <Header title={'x的帖子'} />
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
    const { posts } = this.state
    return (
      posts.map((p, i) => {
        return <PostItem key={i} post={p} />
      })
    )
  }
}
