import React from 'react'
import { Link } from 'react-router'
import { login } from 'actions'

import './style.sass'

const STATUS_CODE = {
  SUCCESS: 200,
  PASSWORD_ERROR: 403,
  USER_NOT_FOUND: 404
}
export default class SignIn extends React.Component {
  constructor () {
    super()
    this.state = {
      statucCode: 0
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { name, password } = this.refs
    const user = {
      email: name.value,
      password: password.value
    }
    this.props.dispatch(login(user))
  }
  render () {
    const { statucCode } = this.state
    console.log(this.props)
    return (
      <div className="signin-page">
        <header>
          <Link className="fa fa-close" to="/" />
        </header>
        <main>
          <h1 className="logo">论坛</h1>
          <form action="/create_login_session" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input ref="name" type="text" className="form-control" placeholder="用户名" />
            </div>
            { statucCode === STATUS_CODE.USER_NOT_FOUND ? (
              <div className="form-group">
                <p>用户名不存在</p>
              </div>
            ) : null }
            <div className="form-group">
              <input ref="password" type="password" className="form-control" placeholder="密码" />
            </div>
            { statucCode === STATUS_CODE.PASSWORD_ERROR ? (
              <div className="form-group">
                <p>密码错误</p>
              </div>
            ) : null }
            <div className="form-group">
              <input type="submit" className="btn btn-primary btn-block" value="登录" />
            </div>
          </form>
        </main>
        <footer>
          <Link className="link" to="/signup">新用户注册</Link>
        </footer>
      </div>
    )
  }
}

SignIn.contextTypes = {
  router: React.PropTypes.object
}
