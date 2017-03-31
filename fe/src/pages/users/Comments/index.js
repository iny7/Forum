import React, { Component, PropTypes } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default class Comments extends Component {
  render () {
    return (
      <div className="application-page">
        <Header title={'x的评论'} />
        <main className="cx-body"></main>
        <Footer />
      </div>
    )
  }
}
Comments.propTypes = {
  dispatch: PropTypes.func
}
