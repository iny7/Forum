import React from 'react'
import { Link } from 'react-router'

import './style.sass'

export default class Header extends React.Component {
  render () {
    const { title, headerRight } = this.props
    return (
      <header className="cx-header">
        <div className="header-left"></div>
        <h2 className="header-title">{title}</h2>
        {headerRight()}
      </header>
    )
  }
}

Header.defaultProps = {
  headerRight: () => <div className="header-right"></div>
}