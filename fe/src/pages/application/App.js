import React from 'react'
import { Link } from 'react-router'
import Header from './Header'
import Footer from './Footer'

export default class App extends React.Component {
  render () {
    return (
      <div className="sign-index-page">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
