import React from 'react'
import { Link } from 'react-router'
import './style.sass'

export default class Welcome extends React.Component {
  render () {
    return (
      <div className="sign-index-page">
        <header>
          <h1 className="logo">论坛</h1>
        </header>
        <footer>
          <Link className="btn btn-default" to="/signup">注册</Link>
          <Link className="btn btn-primary" to="/signin">登录</Link>
        </footer>
      </div>
    )
  }
}
