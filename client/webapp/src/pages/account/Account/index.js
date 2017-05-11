import React, { Component } from 'react'
import { Link } from 'react-router'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Spiner from 'components/Spiner'
import './style.sass'

const HeaderRight = () => (
  <Link className="fa fa-id-card-o" to="/account/edit"></Link>
  /* <Link className="fa fa-cog" to="/account/settings"></Link> */
)

export default class Account extends Component {
  state = {
    loading: false,
  }
  componentWillMount () {
    this.setState({ loading: true })
    const { userId, dispatch } = this.props
    dispatch({ type: 'user:get:profile', payload: { userId } })
  }
  componentWillReceiveProps(nextProps) {
    const { user, userId, dispatch } = nextProps
    if (user && user.avatar) {
      this.setState({ loading: false })
    } else {
      dispatch({ type: 'user:get:profile', payload: { userId } })
    }
  }
  handleFollow = () => {
    const { user, dispatch } = this.props
    // const myId = MB.currentUser().id
    // const otherId
    dispatch({ type: 'follow:user:request', payload: { userId: user.id } })
  }
  handleUnfollow = () => {
    const { user, dispatch } = this.props
    dispatch({ type: 'unfollow:user:request', payload: { userId: user.id } })
  }
  handleSignOut = () => {
    this.props.dispatch({ type: 'signout:request' })
  }
  render () {
    const { loading } = this.state
    const { user } = this.props
    const isMe = user.id == MB.currentUser().id
    const title = isMe ? '我的' : user.nickname
    return (
      <div className="application-page account-index">
        <Header title={title} HeaderRight={isMe && HeaderRight } />
        { loading ? this.renderLoading() : this.renderContent() }
        <Footer />
      </div>
    )
  }
  renderLoading = () => (
    <main className="cx-body">
      <Spiner />
    </main>
  )

  renderContent = () => {
    const { user } = this.props
    const { id, followers_count, following_count, posts_count } = user

    const isMe = user.id == MB.currentUser().id
    const followBtn = isMe ? null : (
      user.is_followed
        ? <a className="btn btn-default" onClick={this.handleUnfollow}>取消关注</a>
        : <a className="btn btn-primary" onClick={this.handleFollow}>关注</a>
    )
    return (
      <main className="cx-body">
        {/* Profile */}
        <section className="section-1">
          <img className="account-bg" src="/images/bg.jpeg" />
          <img className="avatar lg" src={user.avatar} />
          { isMe && <h3 className="name">{user.nickname}</h3> }
          <p className="desc">{user.desc}</p>
          { followBtn }
        </section>

        {/* InfoBar */}
        <section className="section-2">
          <Link className="item focus" to={`/users/${id}/follows`}>
           <div className="num">{following_count}</div>
           <div className="attr">关注</div>
          </Link>
          <Link className="item fans" to={`/users/${id}/fans`}>
           <div className="num">{followers_count}</div>
           <div className="attr">粉丝</div>
          </Link>
          <Link className="item posts" to={`/users/${id}/posts`}>
           <div className="num">{posts_count}</div>
           <div className="attr">帖子</div>
          </Link>
        </section>

         { isMe && (
           <section className="section-3">
              {/*
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
              */}
             <div className="item" onClick={this.handleSignOut}>
               <span className="fa fa-sign-out"></span>
               <h4>退出登录</h4>
               <span className="fa fa-angle-right"></span>
             </div>
           </section>
          ) }
       </main>
     )
  }
}
