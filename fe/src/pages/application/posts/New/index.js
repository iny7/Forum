import React from 'react'
import MyEditor from './MyEditor'

import './style.sass'

export default class New extends React.Component {
  render() {
    return (
      <MyEditor />
    )
  }
}

New.title = '新建'