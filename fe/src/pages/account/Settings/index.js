import React from 'react'
// import { Link } from 'react-router'
import Header from 'components/Header'
import Footer from 'components/Footer'
import './style.sass'

export default class Settings extends React.Component {
  render () {
    return (
      <div className="application-page">
        <Header title="设置" />
        <main className="cx-body">
          Settings
        </main>
        <Footer />
      </div>
    )
  }
}
