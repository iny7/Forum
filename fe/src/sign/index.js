import React from 'react'
import { Link } from 'react-router'
import { Button } from '../components/Button'

//Component not component!!!!!!!!!!
class SignPage extends React.Component {

  constructor(props, context) {
      super(props, context)
  }

  render() {
    return (
      <div className="sign_bg">
        <h1 className="logo">票友</h1>
        <div className="btns">
          <Link to="/signup">
            {
              ({ isActive, onClick, href })=>
                <button
                  className="btn btn-default">
                  注册
                </button>
            }
          </Link>
          <Link to="/signin">
            {
              (params) =>
                <button
                  className="btn btn-primary">
                  登录
                </button>
            }
          </Link>
        </div>
      </div>
    )
  }
}

export default SignPage