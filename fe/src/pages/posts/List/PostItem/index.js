import React from 'react'
import sdf from 'utils/sdf'

import { Link } from 'react-router'

export default class PostItem extends React.Component {
  render () {
    const { post } = this.props
    const { id, title, author, content, comments, created_at } = post
    return (
      <li className="article-item">
        <Link to={`/posts/${id}`}>
          <div className="article-author">
            <img className="avatar" src="/images/avatar.png" />
            <span className="name">{author}</span>
            <span className="fa fa-ellipsis-h"></span>
          </div>
          <h6 className="article-title">{title}</h6>
          <p className="article-content">{content}</p>
          <div className="article-info">
            <div className="like">
              <span className="fa fa-heart-o"></span>
              <span>57</span>
            </div>
            <div className="comment">
              <span className="fa fa-commenting-o"></span>
              <span>{comments.length}</span>
            </div>
            <div className="time">
              <time>{sdf(created_at)}</time>
            </div>
          </div>
        </Link>
      </li>
    )
  }
}