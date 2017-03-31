import React, { Component, PropTypes } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default class Posts extends Component {
  render () {
    return (
      <div className="application-page">
        <Header title={'x的帖子'} />
        <main className="cx-body"></main>
        <Footer />
      </div>
    )
  }
}
Posts.propTypes = {
  dispatch: PropTypes.func
}
