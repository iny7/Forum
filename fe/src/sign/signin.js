import React from 'react'
import { Link } from 'react-router'
import Button from '../components/Button'

//Component not component!!!!!!!!!!
class SignIn extends React.Component {

  constructor(props, context) {
      super(props, context)
  }

  render() {
    return (
      <div className="signin_page">
        <Link to="/">
          {
            ({ isActive, onClick, href }) =>
              <span className="fa fa-close" onClick={onClick}></span>
          }
        </Link>
        <h1 className="logo">应用</h1>
        <form action="">
          <div className="form-group">
            <i className="fa fa-user"></i>
            <input type="text" placeholder="用户名" />
          </div>
          <div className="form-group">
            <i className="fa fa-lock"></i>
            <input type="password" placeholder="密码" />
          </div>
          <Button>登录</Button>
        </form>
        <Link to="/forget">
          {
            ({ isActive, onClick, href }) =>
              <Button onClick={onClick}>
                忘记密码
              </Button>
          }
        </Link>
        <Link to="/signup">{
          ({ isActive, onClick, href }) =>
            <Button onClick={onClick}>
              新用户注册
            </Button>
          }</Link>
      </div>
    )
  }
}

export default SignIn;