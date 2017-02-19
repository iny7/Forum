import React from 'react'
// import { Link } from 'react-router'

export default class List extends React.Component {
  componentWillMount () {
    document.body.className = 'messages-page'
  }
  render () {
    return (
      <main className="cx-body">Messages</main>
    )
  }
}

List.title = '私信'
List.needBack = false
