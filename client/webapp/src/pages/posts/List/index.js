import React from 'react'
import { Link } from 'react-router'

import './style.sass'
import Carousel from './Carousel'
import PostItem from './PostItem'

import Header from 'components/Header'
import Footer from 'components/Footer'

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

export default class List extends React.Component {
  componentWillMount () {
    const { dispatch, location } = this.props
    const { category } = location.query
    this.category = category
    dispatch({ type: 'fetch:post:by:category', payload: { category } })
  }
  componentWillReceiveProps (nProps) {
    const { dispatch, location } = nProps
    const { category } = location.query
    if (category !== this.category) {
      this.category = category
      dispatch({ type: 'fetch:post:by:category', payload: { category } })
    }
  }
  render () {
    const { posts, isLoading, router } = this.props
    const { category = 'newest' } = router.location.query
    const headlines = []
    const result = posts.filter(p => p.category === category)
    return (
      <div className="application-page">
        <Header title="首页" HeaderRight={HeaderRight} />
        <main className="cx-body">
          <section className="article-body">
            <Carousel posts={headlines} />
            <PostNav category={category} />
            { isLoading ? '正在加载' : (
              <ul>
                { result.map((p, k) => {
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
