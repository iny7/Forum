import React, { Component, PropTypes } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default class Follows extends Component {
  render () {
    return (
      <div className="application-page">
        <Header title={'x关注的人'} />
        <main className="cx-body"></main>
        <Footer />
      </div>
    )
  }
}
Follows.propTypes = {
  dispatch: PropTypes.func
}
