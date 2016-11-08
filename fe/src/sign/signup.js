import React from 'react'
import { Link } from 'react-router'
import Button from '../components/Button'
import { InlineInput } from '../components/Form'

//Component not component!!!!!!!!!!
class SignUp extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      nickname: 'chancy',
      username: 'iny',
      password: '123'
    }
  }

  changeNickName(e) {
    this.setState({nickname: e.target.value})
  }

  changeUserName(e) {
    this.setState({username: e.target.value})
  }

  changePassWord(e) {
    this.setState({password: e.target.value})
  }

  handleSignUp() {
    // ajax post this.state and redirect
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
        <div className="form_box">
          <InlineInput
            icon="smile-o"
            klass="input-lg"
            value={this.state.nickname}
            placeholder="昵称"
            handleChange={this.changeNickName.bind(this)}>
          </InlineInput>
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
          <Button
            onClick={this.handleSignUp}
            klass="btn-success btn-lg btn-block">
            注册
          </Button>
        </div>
        <Link to="/signin">
          {
            ({ isActive, onClick, href }) =>
              <Button
                onClick={onClick}
                klass="btn-link">
                已有帐号登录
              </Button>
          }
        </Link>
      </div>
    )
  }
}

export default SignUp;