import React from 'react'
import { Link } from 'react-router'

import { logout } from 'actions/user'
import Header from 'components/Header'
import Footer from 'components/Footer'
import './style.sass'

const HeaderRight = () => (
  <div className="header-right">
    <Link className="fa fa-id-card-o" to="/account/edit"></Link>
    {/* <Link className="fa fa-cog" to="/account/settings"></Link> */}
  </div>
)

export default class Account extends React.Component {
  handleSignOut = () => {
    this.props.dispatch(logout())
  }
  render () {
    return (
      <div className="application-page account-index">
        <Header title="我的" HeaderRight={HeaderRight} />
        <main className="cx-body">
          <section className="section-1">
            <img src="/images/bg.jpeg" alt="" className="account-bg"/>
            <img src="/images/avatar.png" alt="" className="avatar"/>
            <h3 className="name">JAY西元前</h3>
            <p className="desc">一个脱离了高级趣味的人</p>
          </section>
          <section className="section-2">
            <Link className="item focus" to="/users/1/follows">
              <div className="num">22</div>
              <div className="attr">关注</div>
            </Link>
            <Link className="item fans" to="/users/1/fans">
              <div className="num">5</div>
              <div className="attr">粉丝</div>
            </Link>
            <Link className="item posts" to="/users/1/posts">
              <div className="num">399</div>
              <div className="attr">帖子</div>
            </Link>
          </section>
          <section className="section-3">
            <div className="item">
              <span className="fa fa-minus-square"></span>
              <h4>黑名单</h4>
              <span className="fa fa-angle-right"></span>
            </div>
            <div className="item">
              <span className="fa fa-history"></span>
              <h4>浏览历史</h4>
              <span className="fa fa-angle-right"></span>
            </div>
            <div className="item" onClick={this.handleSignOut}>
              <span className="fa fa-sign-out"></span>
              <h4>退出登录</h4>
              <span className="fa fa-angle-right"></span>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}
