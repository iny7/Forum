import React from 'react'
import { Link, browserHistory } from 'react-router'
import myFetch from 'utils/myFetch'
import './style.sass'

export default class Account extends React.Component {
  componentWillMount () {
    document.body.className = 'account-page'
  }
  handleSignOut = () => {
    myFetch.delete({
      url: '/login_sessions'
    }).then((result) => {
      if (result.status_code === 200) {
        // 删除客户端的token
        location.replace('/')
      } else {
        console.log('登出错误')
      }
    })
  }
  render () {
    return (
      <main className="cx-body">
        <section className="section-1">
          <img src="/images/bg.jpeg" alt="" className="account-bg"/>
          <img src="/images/avatar.png" alt="" className="avatar"/>
          <h3 className="name">JAY西元前</h3>
          <p className="desc">一个脱离了高级趣味的人</p>
        </section>
        <section className="section-2">
          <div className="item focus">
            <div className="num">22</div>
            <div className="attr">关注</div>
          </div>
          <div className="item fans">
            <div className="num">5</div>
            <div className="attr">粉丝</div>
          </div>
          <div className="item posts">
            <div className="num">399</div>
            <div className="attr">帖子</div>
          </div>
        </section>
        <section className="section-3">
          <div className="item">
            <span className="fa fa-star"></span>
            <h4>我的收藏</h4>
            <span className="fa fa-angle-right"></span>
          </div>
          <div className="item">
            <span className="fa fa-group"></span>
            <h4>我的好友</h4>
            <span className="fa fa-angle-right"></span>
          </div>
          <div className="item" onClick={this.handleSignOut}>
            <span className="fa fa-sign-out"></span>
            <h4>退出登录</h4>
            <span className="fa fa-angle-right"></span>
          </div>
        </section>
      </main>
    )
  }
}

Account.title = '我的'
Account.needBack = false
Account.HeaderRight = () => (
  <div className="header-right">
    <Link className="fa fa-id-card-o" to="/account/edit"></Link>
    <Link className="fa fa-cog" to="/account/settings"></Link>
  </div>
)
