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
      user: {},
      loading: false
    }
  }
  componentWillMount () {
    this.setState({ loading: true })
    myFetch.get({
      url: '/profiles'
    }).then((user) => {
      this.setState({
        loading: false,
        user: user
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
  handleSave = (e) => {
    e.preventDefault()
    const profile = {
      sex: this.refs.sex.value,
      grade: this.refs.grade.value,
      // avatar: this.refs.thumbnail.src,
      nickname: this.refs.nickname.value
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
    const { user, loading } = this.state
    if (loading) return <div>loading</div>
    const { nickname, sex, avatar = '/images/avatar.png', grade = '', desc = '' } = user

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
                <select ref="grade" className="form-control" value={grade}>
                  <option value="">2012级</option>
                  <option value="">2013级</option>
                  <option value="">2014级</option>
                </select>
              </div>
            </div>
          </section>
          <section className="bottom">
            <textarea
              className="form-control"
              value={desc}
              defaultValue="如果你无法简洁的表达你的想法，那只说明你还不够了解它。 -- 阿尔伯特·爱因斯坦">
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
}

Edit.title = '个人资料'
