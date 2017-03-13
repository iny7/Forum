import React from 'react'
import { Link } from 'react-router'

import './style.sass'
import Carousel from './Carousel'
import Post from './Post'

import Header from 'components/Header'
import Footer from 'components/Footer'

class PostNav extends React.Component {
  render () {
    const { type } = this.context.router.location.query
    return (
      <ul className="article-header">
        <li>
          <Link
            to={{pathname: '/posts'}}
            className={!type ? 'active' : ''}>
            最新
          </Link>
        </li>
        <li>
          <Link
            to={{pathname: '/posts', query: {type: 'picked'}}}
            activeClassName="active">
            精选
          </Link>
        </li>
        <li>
          <Link
            to={{pathname: '/posts', query: {type: 'anonymous'}}}
            activeClassName="active">
            匿名
          </Link>
        </li>
      </ul>
    )
  }
}
PostNav.contextTypes = {
  router: React.PropTypes.object
}

export default class List extends React.Component {
  componentWillMount () {
    document.body.className = 'posts-page'
  }
  render () {
    const { posts, isLoading } = this.props
    const headlines = []
    // const { router: { location } } = this.context
    return (
      <div className="application-page">
        <Header title="首页" HeaderRight={HeaderRight} />
        <main className="cx-body">
          <section className="article-body">
            <Carousel posts={headlines} />
            <PostNav />
            { isLoading ? '正在加载' : (
              <ul>
                {posts.map((value, key) => {
                  return <Post key={key} />
                })}
              </ul>
            ) }
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}
List.contextTypes = {
  router: React.PropTypes.object
}

const HeaderRight = () => (
  <div className="header-right">
    <Link className="fa fa-bell-o" to="/notifications"></Link>
    <Link className="fa fa-edit" to="/posts/new"></Link>
  </div>
)
