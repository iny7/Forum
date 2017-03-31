import React from 'react'
// import { Link } from 'react-router'
import Header from 'components/Header'
import Footer from 'components/Footer'

import myFetch from 'utils/myFetch'
import imgUploader from 'utils/imgUploader'
import './style.sass'

export default class Edit extends React.Component {
  handleAvatar = () => this.refs.avatar.click()
  handleUpload = (e) => {
    const pic = e.target.files[0]
    imgUploader(pic, (data) => {
      this.refs.thumbnail.src = data
    })
  }
  handleSave = (e) => {
    e.preventDefault()
    const profile = {
      sex: this.refs.sex.value,
      grade: this.refs.grade.value,
      avatar: this.refs.avatar.value,
      nickname: this.refs.nickname.value
    }
    myFetch.put({
      url: '/profile',
      data: { profile }
    }).then((result) => {
      console.log(result)
    }).catch(e => console.log('Oops, error'))
  }
  render () {
    return (
      <div className="application-page account-edit-page">
        <Header title={'个人资料'} />
        <main className="cx-body">
          <section className="top">
            <div className="avatar-upload" onClick={this.handleAvatar}>
              <input ref="avatar" type="file" accept="image/png" onChange={this.handleUpload} hidden />
              <img ref="thumbnail" src="/images/avatar.png" alt="" className="avatar lg"/>
              <a href="" className="link">编辑</a>
            </div>
            <div className="base-info">
              <div className="form-group">
                <input ref="nickname" type="text" className="form-control" placeholder="要啥自行车啊" />
              </div>
              <div className="form-group select">
                <select ref="sex" className="form-control">
                  <option value="true">男</option>
                  <option value="false">女</option>
                </select>
                <select ref="grade" className="form-control">
                  <option value="">2012级</option>
                  <option value="">2013级</option>
                  <option value="">2014级</option>
                </select>
              </div>
            </div>
          </section>
          <section className="bottom">
            <textarea id="" cols="30" rows="10"
              className="form-control"
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
