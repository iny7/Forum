import React from 'react'

export default class Comment extends React.Component {
  render () {
    const { comment } = this.props
    const { author, content, created_at: createdAt } = comment
    return (
      <div className="comment">
        <img className="avatar" src="/images/avatar.png" />
        <div className="comment-right">
          <div className="comment-user">
            <span className="user">{author}</span>
            <div className="like">
              <i className="fa fa-thumbs-o-up"></i>
              <span>18</span>
            </div>
          </div>
          <time className="comment-time">{createdAt}</time>
          <div className="comment-body">
            {content}
          </div>
        </div>
      </div>
    )
  }
}
