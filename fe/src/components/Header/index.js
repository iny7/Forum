import React from 'react'
import { browserHistory } from 'react-router'
import './style.sass'

const { location } = window

export default class Header extends React.Component {
  handleBack = () => {
    browserHistory.goBack()
  }
  render () {
    const isRootPath = location.pathname.split('/').filter(s => s).length <= 1
    const { title, needBack = !isRootPath, HeaderRight } = this.props
    // 判断是stateless component还是普通component
    const rightSplat = HeaderRight.prototype.render ? <HeaderRight /> : HeaderRight()
    return (
      <header className="cx-header">
        {needBack ? (
          <div className="header-left">
            <span className="fa fa-angle-left" onClick={this.handleBack}></span>
          </div>
        ) : <div className="header-left"></div>}
        <h2 className="header-title">{title}</h2>
        {rightSplat}
      </header>
    )
  }
}
Header.defaultProps = {
  HeaderRight: () => <div className="header-right"></div>
}
Header.propTypes = {
  title: React.PropTypes.string,
  needBack: React.PropTypes.bool,
  HeaderRight: React.PropTypes.func
}
