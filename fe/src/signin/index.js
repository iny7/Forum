import React from 'react'
import { Link } from 'react-router'
import { Button } from 'antd'

//Component not component!!!!!!!!!!
class SignIndex extends React.Component {

  //in ES6, you can not use getIntialState() {} to initial react component
  constructor(props, context) {
      super(props, context)
  }

  render() {
    return (
      <div className="signin_bg">
        <h1>票友</h1>
        <div className="btns">
          <Link className="btn btn-default" to="/signup">
            {
              ({ isActive, onClick, href })=>
                <Button label="Home" onClick={onClick} href={href} isActive={isActive}>注册</Button>
            }
          </Link>
          <Link className="btn btn-primary" to="/signin">
            {
              (params) =>
                <Button type="primary" label="About" {...params}>登录</Button>
            }
          </Link>
          <Button type="ghost">Ghost</Button>
          <Button type="dashed">Dashed</Button>
        </div>
      </div>
    );
  }
}

export default SignIndex