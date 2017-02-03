import React from 'react'
import { Link } from 'react-router'
import './style.sass'

export default class Edit extends React.Component {
  componentWillMount () {
    document.body.className = 'account-edit-page'
  }
  render () {
    return (
      <main className="cx-body">
        <section className="top">
          <div className="avatar-upload">
            <input type="file" hidden />
            <img src="/images/avatar.png" alt="" className="avatar lg"/>
            <a href="" className="link">编辑</a>
          </div>
          <div className="base-info">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="要啥自行车啊" />
            </div>
            <div className="form-group select">
              <select className="form-control">
                <option value="">男</option>
                <option value="">女</option>
              </select>
              <select className="form-control">
                <option value="">2012级</option>
                <option value="">2013级</option>
                <option value="">2014级</option>
              </select>
            </div>
          </div>
        </section>
        <section className="bottom">
          <textarea name="" id="" cols="30" rows="10" className="form-control">
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。 -- 阿尔伯特·爱因斯坦
          </textarea>
          <div className="form-group">
            <a href="" className="btn btn-primary">保存</a>
          </div>
        </section>
      </main>
    )
  }
}

Edit.title = '个人资料'