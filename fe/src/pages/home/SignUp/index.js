const { alert } = window
import React from 'react'
import { Link } from 'react-router'

import { createUser } from 'actions/user'

import './style.sass'

export default class SignIn extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      password2: ''
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password, password2 } = this.state
    if (password !== password2) {
      return alert('请确认两次输入的密码相同')
    }
    this.props.dispatch(createUser({ email, password }))
  }
  render () {
    const { email, password, password2 } = this.state
    return (
      <div className="signin-page">
        <header>
          <Link className="fa fa-close" to="/" />
        </header>
        <main>
          <h1 className="logo">论坛</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className="form-control"
                placeholder="用户名" />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={password}
                name="password"
                onChange={this.handleChange}
                className="form-control"
                placeholder="密码" />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={password2}
                name="password2"
                onChange={this.handleChange}
                className="form-control"
                placeholder="确认密码" />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary btn-block"
                value="注册" />
            </div>
          </form>
        </main>
        <footer>
          <Link className="link" to="/signin">已有帐号登录</Link>
        </footer>
      </div>
    )
  }
}
