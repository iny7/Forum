import React, { Component } from 'react'

import Loading from 'react-loading'

import './styles.sass'

export default class Spiner extends Component {
  render () {
    return (
      <div className="spinner">
        <Loading type='bubbles' color='#f55d54' />
      </div>
    )
  }
}