import React from 'react'
import { Link } from 'react-router'
import Button from '../components/Button'
import { InlineInput } from '../components/Form'

//Component not component!!!!!!!!!!
class SignIn extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      username: 'iny',
      password: '123'
    }
  }

  changeUserName(e) {
    this.setState({username: e.target.value})
  }

  changePassWord(e) {
    this.setState({password: e.target.value})
  }

  handleS

  render() {
    return (
      <section className="signin_page">
        <Link to="/">
          {
            ({ isActive, onClick, href }) =>
              <span className="fa fa-close" onClick={onClick}></span>
          }
        </Link>
        <h1 className="logo">应用</h1>
        <div className="form_box">
          <InlineInput
            icon="user"
            klass="input-lg"
            value={this.state.username}
            placeholder="用户名"
            handleChange={this.changeUserName.bind(this)}>
          </InlineInput>
          <InlineInput
            icon="lock"
            klass="input-lg"
            type="password"
            value={this.state.password}
            placeholder="密码"
            handleChange={this.changePassWord.bind(this)}>
          </InlineInput>
          <Link to="/index">
            {
              ({ isActive, onClick, href }) =>
                <Button
                  onClick={onClick}
                  klass="btn-primary btn-lg btn-block"
                  block={true}>
                  登录
                </Button>
            }
          </Link>
        </div>
        <div className="signin-footer">
          <Link to="/forget">
            {
              ({ isActive, onClick, href }) =>
                <Button
                  onClick={onClick}
                  klass="btn-link">
                  忘记密码
                </Button>
            }
          </Link>
          <Link to="/signup">{
            ({ isActive, onClick, href }) =>
              <Button
                onClick={onClick}
                klass="btn-link">
                新用户注册
              </Button>
            }</Link>
        </div>
      </section>
    )
  }
}

export default SignIn