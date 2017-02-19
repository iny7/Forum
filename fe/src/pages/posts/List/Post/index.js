import React from 'react'
import { Link } from 'react-router'

export default class Post extends React.Component {
  render () {
    const key = 1
    return (
      <li className="article-item">
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
  }
}