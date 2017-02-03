import React from 'react'
import { Link, IndexLink } from 'react-router'

import './style.sass'
import Carousel from './Carousel'

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
    const { router: { location } } = this.context
    return (
      <main className="cx-body">
        <section className="article-body">
          <Carousel />
          <PostNav />
          <ul>
            {[1,2,3].map((value, key) => {
              return (
                <li key={key} className="article-item">
                  <Link to={`/posts/${key}`}>
                    <div className="article-author">
                      <img className="avatar" src="/images/avatar.png" />
                      <span className="name">要啥自行车啊</span>
                      <span className="fa fa-ellipsis-h"></span>
                    </div>
                    <h6 className="article-title">请教下，PostCSS和rework有什么区别区区别...</h6>
                    <p className="article-content">如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...</p>
                    <div className="article-info">
                      <div className="like">
                        <span className="fa fa-heart-o"></span>
                        <span>57</span>
                      </div>
                      <div className="comment">
                        <span className="fa fa-commenting-o"></span>
                        <span>13</span>
                      </div>
                      <div className="time">
                        <time>12月13日 21:43</time>
                      </div>
                    </div>
                  </Link>
                </li>
              )
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
