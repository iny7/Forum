import React from 'react'
import { Link } from 'react-router'

import { fetchPosts } from 'actions/post'

import './style.sass'
import Carousel from './Carousel'
import PostItem from './PostItem'

import Header from 'components/Header'
import Footer from 'components/Footer'

class PostNav extends React.Component {
  render () {
    const { type } = this.props
    return (
      <ul className="article-header">
        <li>
          <Link to={{pathname: '/posts'}} className={!type ? 'active' : ''}>
            {'最新'}
          </Link>
        </li>

        <li>
          <Link to={{pathname: '/posts', query: {type: 'picked'}}} activeClassName="active">
            {'精选'}
          </Link>
        </li>

        <li>
          <Link to={{pathname: '/posts', query: {type: 'anonymous'}}} activeClassName="active">
            {'匿名'}
          </Link>
        </li>
      </ul>
    )
  }
}

export default class List extends React.Component {
  componentWillMount () {
    document.body.className = 'posts-page'
    const { dispatch } = this.props
    dispatch(fetchPosts())
  }
  render () {
    const { data, isLoading, router } = this.props
    console.log(isLoading)
    const { posts } = data
    const { type } = router.location.query
    const headlines = []
    return (
      <div className="application-page">
        <Header title="首页" HeaderRight={HeaderRight} />
        <main className="cx-body">
          <section className="article-body">
            <Carousel posts={headlines} />
            <PostNav type={type} />
            { isLoading ? '正在加载' : (
              <ul>
                { posts.map((p, k) => {
                  return <PostItem key={k} post={p} />
                }) }
              </ul>
            ) }
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}
List.propTypes = {
  dispatch: React.PropTypes.func,
  router: React.PropTypes.object
}

const HeaderRight = () => (
  <div className="header-right">
    <Link className="fa fa-bell-o" to="/notifications"></Link>
    <Link className="fa fa-edit" to="/posts/new"></Link>
  </div>
)
