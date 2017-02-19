import React from 'react'

export default class Comment extends React.Component {
  render () {
    return (
      <div className="comment">
        <img className="avatar" src="/images/avatar.png" />
        <div className="comment-right">
          <div className="comment-user">
            <span className="user">小明123</span>
            <div className="like">
              <i className="fa fa-thumbs-o-up"></i>
              <span>18</span>
            </div>
          </div>
          <time className="comment-time">12月13日 21:43</time>
          <div className="comment-body">
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它。
          </div>
        </div>
      </div>
    )
  }
}
