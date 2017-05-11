import React, { Component } from 'react'
import sdf from 'my-lib/utils/sdf'

import Header from 'components/Header'
import Comment from './Comment'
import Spiner from 'components/Spiner'

import './style.sass'

const HeaderRight = () => (
  <div className="header-right">
    <span className="fa fa-ellipsis-h"></span>
  </div>
)

export default class Show extends Component {
  constructor () {
    super()
    this.state = {
      loading: true
    }
  }
  componentWillMount () {
    // TODO, 应保持保持路由之间没有耦合(直接url或由其他页面跳转过来是同一套逻辑)
    // 如果根据是否传入post Entity来决定有无loading, 那么就不易拿到最新的数据
    // (数据请求的发起是根据上层传入的props决定的)
    // 应改为: willMount时, 根据route中的id发起fetch
    // 但这样又有个问题: 每次都需要把整个posts传进来
    this.setState({ loading: true })
    const { id, dispatch } = this.props
    dispatch({ type: 'fetch:post:by:id', payload: { id } })
  }
  componentWillReceiveProps (nProps) {
    // console.log(this.props.post && this.props.post.comments)
    // console.log(nProps.post.comments)
    if (nProps.post && this.state.loading) {
      this.setState({ loading: false })
    }
  }
  handleComment = () => {
    const { post, dispatch } = this.props
    const comment = {
      content: this.refs.textarea.value
    }
    dispatch({ type: 'post:add:comment:request', payload: { post, comment } })
  }

  render () {
    // TODO loading应由store控制
    const { loading } = this.state

    return (
      <div className="application-page posts-show-page">
        <Header title="文章详情" HeaderRight={false && HeaderRight} />
        { loading ? this.renderLoading() : this.renderPost() }
      </div>
    )
  }
  renderLoading = () => (
    <main className="cx-body">
      <Spiner />
    </main>
  )
  renderPost = () => {
    const { post } = this.props
    const { author, comments, title, content, created_at, liked, likes_count } = post
    const likeIcon = liked ? 'fa fa-heart' : 'fa fa-heart-o'
    return (
      <main className="cx-body">
        <h3 className="title">{title}</h3>
        <div className="info">
          <img className="avatar sm" src={author.avatar} />
          <span>{author.nickname}</span>
          <time>{sdf(created_at)}</time>
          <span>{`阅读${4521}`}</span>
        </div>
        <section className="content" dangerouslySetInnerHTML={{ __html: content }}></section>
        <div className="operation">
          <div className="like">
            <i className={likeIcon}></i>
            <span>{likes_count}</span>
          </div>
        </div>
        <section className="comments">
          <h4 className="comments-title">{`评论 ${comments.length}`} </h4>
          { comments.map((c, i) => {
            return <Comment key={i} comment={c}/>
          }) }
        </section>
        <section className="new-comment">
          <h3>新评论</h3>
          <textarea ref="textarea" placeholder="test"></textarea>
          <a className="btn btn-primary" onClick={this.handleComment}>发表</a>
        </section>
      </main>
    )
  }
}
