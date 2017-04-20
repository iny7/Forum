import React from 'react'
import { Link } from 'react-router'

import './style.sass'
import Carousel from './Carousel'

import Header from 'components/Header'
import PostItem from 'components/PostItem'
import Footer from 'components/Footer'

// TODO 瀑布流fetch
export default class List extends React.Component {
  componentWillMount () {
    const { category } = this.props
    this.category = category
    this.fetchData(category)
  }
  componentWillReceiveProps (nProps) {
    const { category, posts } = nProps
    // 如果文章种类发生变化, 并且store中新种类的数量为0, 那么发起请求
    if (category !== this.category && !posts.length) {
      this.category = category
      this.fetchData(category)
    }
  }
  fetchData (category) {
    this.props.dispatch({ type: 'fetch:post:by:category', payload: { category } })
  }
  render () {
    const { posts, category } = this.props
    const headlines = []
    return (
      <div className="application-page">
        <Header title="首页" HeaderRight={HeaderRight} />
        <main className="cx-body">
          <section className="article-body">
            <Carousel posts={headlines} />
            <PostNav category={category} />
            { false ? '正在加载' : (
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

const HeaderRight = () => (
  <div className="header-right">
    <Link className="fa fa-bell-o" to="/notifications"></Link>
    <Link className="fa fa-edit" to="/posts/new"></Link>
  </div>
)

const PostNav = ({ category }) => (
  <ul className="article-header">
    <li>
      <Link to={{pathname: '/posts'}} className={category === 'newest' ? 'active' : ''}>
        {'最新'}
      </Link>
    </li>

    <li>
      <Link to={{pathname: '/posts', query: {category: 'picked'}}} activeClassName="active">
        {'精选'}
      </Link>
    </li>

    <li>
      <Link to={{pathname: '/posts', query: {category: 'anonymous'}}} activeClassName="active">
        {'匿名'}
      </Link>
    </li>
  </ul>
)
