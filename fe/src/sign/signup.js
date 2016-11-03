import React from 'react'
import { Link } from 'react-router'
import Button from '../components/Button'

//Component not component!!!!!!!!!!
class SignUp extends React.Component {

  //in ES6, you can not use getIntialState() {} to initial react component
  constructor(props, context) {
      super(props, context);
  }

  render() {
    return (
      <div className="signup_page">
        <Link to="/">
          {
            ({ isActive, onClick, href }) =>
              <span className="fa fa-close" onClick={onClick}></span>
          }
        </Link>
        <h1 className="logo">应用</h1>
        <form className="new_user" id="new_user" action="/users" acceptCharset="UTF-8" method="post">
          <input type="hidden" name="authenticity_token" value="/n8koyB1wii9POtHqrW5YIg5P5tYLycpVP1+kKBv2rlmS03Ol3pKTI1+LlmI7uUPuWh2VdBegOQY57C0oBtbaA==" />
          <div className="form-group">
            <i className="fa fa-smile-o"></i>
            <input type="text" placeholder="昵称" name="user[nickname]" />
          </div>
          <div className="form-group">
            <i className="fa fa-user"></i>
            <input type="text" placeholder="用户名" name="user[name]"/>
          </div>
          <div className="form-group">
            <i className="fa fa-lock"></i>
            <input type="password" placeholder="密码" name="user[password]" />
          </div>
        </form>
        <Link to="/signup">
          {
            ({ isActive, onClick, href }) =>
              <Button onClick={onClick}>
                注册
              </Button>
          }
        </Link>
        <Link to="/signin">
          {
            ({ isActive, onClick, href }) =>
              <Button onClick={onClick}>
                已有帐号登录
              </Button>
          }
        </Link>
      </div>
    )
  }
}

export default SignUp;