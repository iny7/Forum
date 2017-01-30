import React from 'react'
import { Link } from 'react-router'

export default class List extends React.Component {
  render () {
    return (
      <main className="cx-body articles-page">
        <ul className="article-header">
          <li>
            <Link to="/posts">最新</Link>
          </li>
          <li>
            <Link to="/posts/picked">精选</Link>
          </li>
          <li>
            <Link to="posts/anonymous">匿名</Link>
          </li>
        </ul>
        <section className="article-body">
          <div className="article-carousel">轮播</div>
          <ul>
            {[1,2,3].map((value, key) => {
              return (
                <li key={key} className="article-item">
                  <Link to="#">
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
            })}
          </ul>
        </section>
      </main>
    )
  }
}
