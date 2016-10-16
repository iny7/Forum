import React from 'react'
import { Link } from 'react-router'
import { Button } from '../components/Button'

//Component not component!!!!!!!!!!
class SignIn extends React.Component {

  constructor(props, context) {
      super(props, context)
  }

  render() {
    return (
      <div className="signin_page">
        <span className="fa fa-close"></span>
        <h1 className="logo">票友</h1>
        <form action="">
          <input type="text" placeholder="用户名" />
          <input type="password" placeholder="密码" />
          <button type="submit"></button>
        </form>
        <Link to="/forget">忘记密码</Link>
        <Link to="/signup">新用户注册</Link>
        <div className="btns">
          <Link to="/signup">
            {
              ({ isActive, onClick, href })=>
                <button>
                  注册
                </button>
            }
          </Link>
          <Link to="/signin">
            {
              (params) =>
                <button>
                  登录
                </button>
            }
          </Link>
        </div>
      </div>
    )
  }
}

export default SignIn;