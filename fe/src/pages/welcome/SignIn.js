import React from 'react'
import { Link } from 'react-router'

export default class SignIn extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
  }
  render () {
    return (
      <div className="signin-page">
        <header>
          <Link className="fa fa-close" to="/" />
        </header>
        <main>
          <h1 className="logo">论坛</h1>
          <form action="/create_login_session" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="用户名" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="密码" />
            </div>
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
