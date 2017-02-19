import React from 'react'
import myFetch from 'utils/myFetch'
import { browserHistory } from 'react-router'
// import MyEditor from './MyEditor'

import './style.sass'

export default class New extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const { title, content } = this
    myFetch.post({
      url: '/posts',
      data: {
        title: title.value,
        text: content.value
      }
    }).then((result) => {
      if (result.status_code === 200) {
        // 跳转成功页面
        const id = result.post_id
        browserHistory.replace(`/posts/${id}`)
      } else {
        console.log(result.errors)
      }
    })
  }
  render () {
    return (
      <div style={{padding: '20px 5%'}}>
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
    )
  }
}

New.title = '新建'
