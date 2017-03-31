import React from 'react'
// import { Link } from 'react-router'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default class List extends React.Component {
  render () {
    return (
      <div className="application-page">
        <Header title="私信" />
        <main className="cx-body">Messages</main>
        <Footer />
      </div>
    )
  }
}

List.title = '私信'
List.needBack = false
