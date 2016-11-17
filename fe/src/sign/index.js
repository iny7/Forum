import React from 'react'
import { Link } from 'react-router'
import Button from '../components/Button'

import './index.sass'

//Component not component!!!!!!!!!!
class SignPage extends React.Component {

  constructor(props, context) {
      super(props, context)
  }

  render() {
    return (
      <div className="sign_bg">
        <h1 className="logo">呵呵</h1>
        <div className="btns">
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
                  登录
                </Button>
            }
          </Link>
        </div>
      </div>
    )
  }
}

export default SignPage