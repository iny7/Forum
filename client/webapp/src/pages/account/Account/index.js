import React from 'react'
import { Link } from 'react-router'
import myFetch from 'utils/myFetch'

import Header from 'components/Header'
import Footer from 'components/Footer'
import './style.sass'

const HeaderRight = () => (
  <div className="header-right">
    <Link className="fa fa-id-card-o" to="/account/edit"></Link>
    {/* <Link className="fa fa-cog" to="/account/settings"></Link> */}
  </div>
)

const InfoBar = ({ user }) => {
  const { followers_count, following_count, posts_count } = user
  return (
    <section className="section-2">
      <Link className="item focus" to="/users/1/follows">
        <div className="num">{following_count}</div>
        <div className="attr">关注</div>
      </Link>
      <Link className="item fans" to="/users/1/fans">
        <div className="num">{followers_count}</div>
        <div className="attr">粉丝</div>
      </Link>
      <Link className="item posts" to="/users/1/posts">
        <div className="num">{posts_count}</div>
        <div className="attr">帖子</div>
      </Link>
    </section>
  )
}

const Profile = ({ user }) => (
  <section className="section-1">
    <img className="account-bg" src="/images/bg.jpeg" />
    <img className="avatar lg" src={user.avatar} />
    <h3 className="name">{user.nickname}</h3>
    <p className="desc">{user.desc}</p>
  </section>
)

export default class Account extends React.Component {
  state = {
    loading: false,
    user: {}
  }
  componentWillMount () {
    this.setState({ loading: true })
    myFetch.get({
      url: '/account'
    }).then(user => {
      this.setState({
        loading: false,
        user
      })
    })
  }
  handleSignOut = () => {
    this.props.dispatch({ type: 'signout:request' })
  }
  render () {
    const { loading, user } = this.state
    if (loading) return null

    return (
      <div className="application-page account-index">
        <Header title="我的" HeaderRight={HeaderRight} />
        <main className="cx-body">
          <Profile user={user} />
          <InfoBar user={user} />
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
