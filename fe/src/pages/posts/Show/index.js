import React from 'react'

import Header from 'components/Header'
import Comment from './Comment'

import './style.sass'

class HeaderRight extends React.Component {
  render () {
    return (
      <div className="header-right">
        <span className="fa fa-ellipsis-h"></span>
      </div>
    )
  }
}

export default class Show extends React.Component {
  componentWillMount () {
    document.body.className = 'posts-show-page'
  }
  render () {
    const { data: { posts }, params: { id } } = this.props
    const post = posts.find((p) => p.id === id >> 0)
    const comments = post && post.comments || []
    return (
      <div className="application-page">
        <Header title="文章详情" HeaderRight={HeaderRight} />
        { post ? (
          <main className="cx-body">
            <h3 className="title">{post.title}</h3>
            <div className="info">
              <img className="avatar sm" src="/images/avatar.png" alt=""/>
              <time>12月13日 21:43</time>
              <span>{`阅读${4521}`}</span>
            </div>
            <section className="content" dangerouslySetInnerHTML={{ __html: post.content }}></section>
            <div className="operation">
              <div className="mark">
                <i className="fa fa-bookmark"></i>
                <span>18</span>
              </div>
              <div className="like">
                <i className="fa fa-heart-o"></i>
                <span>57</span>
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
// Show.contextTypes = {
//   router: React.PropTypes.object
// }
