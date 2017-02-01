import React from 'react'
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
    return (
      <main className="cx-body">
        <h3 className="title">请教下，PostCSS和rework有什么区别区区别...</h3>
        <div className="info">
          <img className="avatar sm" src="/images/avatar.png" alt=""/>
          <time>12月13日 21:43</time>
          <span>{`阅读${4521}`}</span>
        </div>
        <section className="content">
          <p>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...
          </p>
          <p>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...
          </p>
          <p>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...
          </p>
          <p>
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它解它...
          </p>
        </section>
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
          <h4 className="comments-title">评论 4</h4>
          {[1, 2, 3].map((c, i) => {
            return (
              <div key={i} className="comment">
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
          })}
        </section>
      </main>
    )
  }
}

Show.title = '文章详情'
Show.HeaderRight = HeaderRight