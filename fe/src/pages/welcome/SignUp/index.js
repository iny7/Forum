import React from 'react'
import { Link } from 'react-router'
import myFetch from 'utils/myFetch'
import './style.sass'

export default class SignIn extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      password: '',
      password2: ''
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target
    const newState = {}[name] = value
    this.setState(Object.assign({}, this.state, {
      [name]: value
    }))
  }
  componentDidMount () {
    const name = 'hehe'
    const password = 'xixi'
    myFetch.post({
      url: '/users.json',
      data: { user: { name, password } }
    }).then((result) => {
      console.log(result)
    }).catch(e => console.log("Oops, error"))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { name, password, password2 } = this.state
    myFetch.post({
      url: '/users.json',
      data: { user: { name, password } }
    }).then((result) => {
      console.log(result)
    }).catch(e => console.log("Oops, error"))
  }
  render () {
    const { user, password, password2 } = this.state
    return (
      <div className="signin-page">
        <header>
          <Link className="fa fa-close" to="/" />
        </header>
        <main>
          <h1 className="logo">论坛</h1>
          <form action="/create_login_session" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                value={name}
                name="name"
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
