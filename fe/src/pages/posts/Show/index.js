import React, { Component, PropTypes } from 'react'
import sdf from 'utils/sdf'

import Header from 'components/Header'
import Comment from './Comment'
import { fetchPost } from 'actions/post'

import './style.sass'

class HeaderRight extends Component {
  render () {
    return (
      <div className="header-right">
        <span className="fa fa-ellipsis-h"></span>
      </div>
    )
  }
}

const LoadingUI = () => (
  <div>{'loading'}</div>
)

export default class Show extends React.Component {
  componentWillMount () {
    const { dispatch, router } = this.props
    const { id } = router.params
    dispatch(fetchPost(id))
  }
  render () {
    const { isLoading, data: { posts }, params: { id } } = this.props
    const post = posts.find((p) => p.id === id >> 0)
    console.log('haha', isLoading)
    if (isLoading || !post) return LoadingUI()

    const comments = post && post.comments || []
    const { title, author, created_at, liked, likes_count } = post
    const likeIcon = liked ? 'fa fa-heart' : 'fa fa-heart-o'
    return (
      <div className="application-page posts-show-page">
        <Header title="文章详情" HeaderRight={HeaderRight} />
        { post ? (
          <main className="cx-body">
            <h3 className="title">{title}</h3>
            <div className="info">
              <img className="avatar sm" src="/images/avatar.png" alt=""/>
              <span>{author}</span>
              <time>{sdf(created_at)}</time>
              <span>{`阅读${4521}`}</span>
            </div>
            <section className="content" dangerouslySetInnerHTML={{ __html: post.content }}></section>
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
              })}
            </section>
          </main>
        ) : <div>Loading</div>}
      </div>
    )
  }
}
Show.propTypes = {
  dispatch: PropTypes.func
}
// Show.contextTypes = {
//   router: React.PropTypes.object
// }
