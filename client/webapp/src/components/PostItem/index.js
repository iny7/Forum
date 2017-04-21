import React from 'react'
import sdf from 'utils/sdf'
import './style.sass'

import { Link } from 'react-router'

export default class PostItem extends React.Component {
  handleClick = (e) => {
    e.preventDefault()
    alert('1.不显示本条\n2.屏蔽该作者')
  }
  render () {
    const { post } = this.props
    const { id, title, author, content, comments, created_at, liked, likes_count } = post
    const likeIcon = liked ? 'fa fa-heart' : 'fa fa-heart-o'
    return (
      <li className="article-item">
        <Link to={`/posts/${id}`}>
          <div className="article-author">
            <img className="avatar" src={author.avatar} />
            <span className="name">{author.name}</span>
            <span className="fa fa-ellipsis-h" onClick={this.handleClick}></span>
          </div>
          <h6 className="article-title">{title}</h6>
          <p className="article-content">{content}</p>
          <div className="article-info">
            <div className="like">
              <span className={likeIcon}></span>
              <span>{likes_count}</span>
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