import React, { Component, PropTypes } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default class Fans extends Component {
  render () {
    return (
      <div className="application-page">
        <Header title={'x的粉丝'} />
        <main className="cx-body"></main>
        <Footer />
      </div>
    )
  }
}
Fans.propTypes = {
  dispatch: PropTypes.func
}
