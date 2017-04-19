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
      // const { name, avatar, sex, grade, desc } = user
      this.setState({
        loading: false,
        ...user
        // name, avatar, sex, grade, desc
      })
    })
  }
  handleAvatar = () => this.refs.avatar.click()
  handleUpload = (e) => {
    const pic = e.target.files[0]
    imgUploader(pic, (data) => {
      console.log(data)
      this.refs.thumbnail.src = data
    })
  }
  handleSex = (e) => {
    const sex = e.target.value
    this.setState({ sex })
  }
  handleGrade = (e) => {
    const grade = e.target.value
    this.setState({ grade })
  }
  handleSave = (e) => {
    e.preventDefault()
    const { nickname, avatar, sex, grade, desc } = this.state
    const profile = {
      nickname, avatar, sex, grade, desc
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
                <input ref="nickname" type="text" className="form-control" placeholder={nickname} />
              </div>
              <div className="form-group select">
                <select ref="sex" className="form-control" value={sex}>
                  <option value="0">无</option>
                  <option value="1">男</option>
                  <option value="2">女</option>
                </select>
                <select ref="grade" className="form-control" value={grade} onChange={this.handleGrade}>
                  <option value="2012">2012级</option>
                  <option value="2013">2013级</option>
                  <option value="2014">2014级</option>
                </select>
              </div>
            </div>
          </section>
          <section className="bottom">
            <textarea className="form-control" defaultValue={desc}>
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
