import React from 'react'
// import { Link } from 'react-router'
import myFetch from 'utils/myFetch'

import Header from 'components/Header'
import Footer from 'components/Footer'

import imgUploader from 'utils/imgUploader'
import './style.sass'

export default class Edit extends React.Component {
  constructor () {
    super()
    this.state = {
      loading: false
    }
  }
  componentWillMount () {
    this.setState({ loading: true })
    myFetch.get({
      url: '/profiles'
    }).then(user => {
      const { nickname, avatar, sex, grade, desc } = user
      this.avatar = avatar
      this.setState({
        loading: false,
        nickname, avatar, sex, grade, desc
      })
    })
  }
  handleAvatar = () => this.refs.avatar.click()
  handleUpload = (e) => {
    const pic = e.target.files[0]
    imgUploader(pic, (data) => {
      // this.refs.thumbnail.src = data
      this.setState({ avatar: data })
    })
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSave = (e) => {
    e.preventDefault()
    const { nickname, avatar, sex, grade, desc } = this.state
    const profile = {
      nickname, sex, grade, desc,
      avatar: avatar === this.avatar ? '' : avatar
    }
    myFetch.put({
      url: '/profiles',
      data: { profile }
    }).then((result) => {
      console.log(result)
    }).catch((e) => {
      console.error('Oops, error', e)
    })
  }
  render () {
    const { nickname, avatar, sex, grade, desc, loading } = this.state
    if (loading) return this.renderLoading()

    return (
      <div className="application-page account-edit-page">
        <Header title={'个人资料'} />
        <main className="cx-body">
          <section className="top">
            <div className="avatar-upload" onClick={this.handleAvatar}>
              <input ref="avatar" type="file" accept="image/png" onChange={this.handleUpload} hidden />
              <img ref="thumbnail" src={avatar} className="avatar lg"/>
              <a className="link">编辑</a>
            </div>
            <div className="base-info">
              <div className="form-group">
                <input name="nickname" type="text" className="form-control" placeholder={nickname} onChange={this.handleChange} />
              </div>
              <div className="form-group select">
                <select name="sex" className="form-control" value={sex} onChange={this.handleChange}>
                  <option value="0">无</option>
                  <option value="1">男</option>
                  <option value="2">女</option>
                </select>
                <select name="grade" className="form-control" value={grade} onChange={this.handleChange}>
                  <option value="2012">2012级</option>
                  <option value="2013">2013级</option>
                  <option value="2014">2014级</option>
                </select>
              </div>
            </div>
          </section>
          <section className="bottom">
            <textarea name="desc" className="form-control" value={desc} onChange={this.handleChange}>
            </textarea>
            <div className="form-group">
              <a className="btn btn-primary" onClick={this.handleSave}>保存</a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }
  renderLoading = () => (
    <div className="application-page account-edit-page">
      <Header title={'个人资料'} />
      <main>
        <div>loading</div>
        <div>loading</div>
        <div>loading</div>
        <div>loading</div>
      </main>
      <Footer />
    </div>
  )
}

Edit.title = '个人资料'
