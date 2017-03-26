import React from 'react'
import Header from 'components/Header'
import { createPost } from 'actions/user'
// import MyEditor from './MyEditor'

import './style.sass'

export default class New extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const { title, content } = this
    const post = {
      title: title.value,
      content: content.value
    }
    this.props.dispatch(createPost(post))
  }
  render () {
    return (
      <div className="application-page">
        <Header title="发表帖子" />
        <div className="new-post-page">
          {/* <MyEditor /> */}
          <div className="form-group">
            <input
              type="text"
              placeholder="请输入标题"
              className="form-control"
              ref={(ref) => { this.title = ref }} />
          </div>
          <div className="form-group">
            <textarea
              cols="30"
              rows="10"
              placeholder="请输入内容"
              className="form-control"
              ref={(ref) => { this.content = ref }}>
            </textarea>
          </div>
          <a className="btn btn-primary" onClick={this.handleSubmit}>发表</a>
        </div>
      </div>
    )
  }
}

New.title = '新建'
