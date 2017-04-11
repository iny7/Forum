import React, { Component, PropTypes } from 'react'
import myFetch from 'utils/myFetch'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default class Posts extends Component {
  componentWillMount () {
    console.log(this.props.params.id)

    myFetch.get({
      url: this.props.location.pathname
    }).then(res => {
      console.log(res)
    })
  }
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
