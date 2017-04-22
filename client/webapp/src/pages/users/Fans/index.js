import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

import Header from 'components/Header'
import Footer from 'components/Footer'
import UserItem from 'components/UserItem'

export default class Fans extends Component {
  componentWillMount () {
    const { userId, dispatch } = this.props
    dispatch({ type: 'user:get:fans', payload: { userId } })
  }
  handleUser (userId) {
    browserHistory.push(`/users/${userId}`)
  }
  render () {
    const { fans, userName } = this.props
    const title = userName ? `${userName}的粉丝` : '加载中...'
    return (
      <div className="application-page">
        <Header title={title} />
        <main className="cx-body">
          { fans.map((user, index) => {
            return <UserItem key={index} user={user} handleClick={() => this.handleUser(user.id)} />
          }) }
        </main>
        <Footer />
      </div>
    )
  }
}
Fans.propTypes = {
  dispatch: PropTypes.func
}
