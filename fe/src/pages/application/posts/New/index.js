import React from 'react'

import './style.sass'

export default class New extends React.Component {
  constructor(props) {
    super(props)
  }
  onChange = (e) => {
  }
  render () {
    return (
      <textarea name="" id="" cols="30" rows="10"></textarea>
    )
  }
}

New.title = '新建'