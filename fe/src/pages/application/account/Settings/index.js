import React from 'react'
import { Link } from 'react-router'
import './style.sass'

export default class Settings extends React.Component {
  componentWillMount () {
    document.body.className = 'settings-page'
  }
  render () {
    return (
      <main className="cx-body">
        Settings
      </main>
    )
  }
}

Settings.title = '设置'