import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import Header from 'components/Header'
import Footer from 'components/Footer'
import UserItem from 'components/UserItem'

export default class Follows extends Component {
  componentWillMount () {
    const { userId, dispatch } = this.props
    dispatch({ type: 'user:get:following', payload: { userId } })
  }
  handleUser (userId) {
    browserHistory.push(`/users/${userId}`)
  }
  // componentWillReceiveProps(nProps) {
    // const { follows } = nProps
    // if (follows.length) {
    // }
  // }
  render () {
    const { follows, userName } = this.props
    const title = userName ? `${userName}的关注` : '加载中...'
    return (
      <div className="application-page">
        <Header title={title} />
        <main className="cx-body">
          { follows.map((user, index) => {
            return <UserItem key={index} user={user} handleClick={() => this.handleUser(user.id)} />
          }) }
        </main>
        <Footer />
      </div>
    )
  }
}
