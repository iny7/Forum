import React, { Component } from 'react'

import './styles.sass'

export default class UserItem extends Component {
  render () {
    const { user: { name, avatar, desc }, handleClick } = this.props
    return (
      <div className="user-item" onClick={handleClick}>
        <img className="avatar lg" src={avatar} />
        <div className="info">
          <div className="name">{name}</div>
          <div className="desc">{desc || '这家伙很懒, 什么都没说...'}</div>
        </div>
      </div>
    )
  }
}
