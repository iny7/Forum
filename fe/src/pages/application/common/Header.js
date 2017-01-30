import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {
  render () {
    return (
      <header className="cx-header">
        <div className="header-left"></div>
        <h2 className="header-title">首页</h2>
        <div className="header-right">
          <Link className="fa fa-bell-o" to="/notifications"></Link>
          <Link className="fa fa-edit" to="/posts/new"></Link>
        </div>
      </header>
    )
  }
}
