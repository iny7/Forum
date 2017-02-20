import React from 'react'
import { Link } from 'react-router'

import './style.sass'
import Carousel from './Carousel'
import Post from './Post'
import myFetch from 'utils/myFetch'

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
  constructor () {
    super()
    this.state = {
      headlines: [],
      posts: []
    }
  }
  componentWillMount () {
    document.body.className = 'posts-page'
  }
  componentDidMount () {
    const { type } = this.context.router.location.query
    this.props.dispatch({
      type: 'REQUEST_POSTS',
      category: type
    })
  }
  fetchData (type) {
    myFetch.get({
      url: '/posts' + type ? `?type=${type}` : ''
    }).then((result) => {
      this.setState()
    })
  }
  render () {
    const { container, dispatch } = this.props
    const { posts } = container
    // const { router: { location } } = this.context
    return (
      <main className="cx-body">
        <section className="article-body">
          <Carousel />
          <PostNav />
          <ul>
            {posts.map((value, key) => {
              return <Post key={key} />
            })}
          </ul>
        </section>
      </main>
    )
  }
}
List.contextTypes = {
  router: React.PropTypes.object
}

List.title = '首页'
List.needBack = false
List.HeaderRight = () => (
  <div className="header-right">
    <Link className="fa fa-bell-o" to="/notifications"></Link>
    <Link className="fa fa-edit" to="/posts/new"></Link>
  </div>
)
