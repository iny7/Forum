import React from 'react'

import './style.sass'

export default class Carousel extends React.Component {
  componentWillMount () {
    // TODO 独立fetch头条信息
    // TODO 直接connect到store
  }
  render () {
    return (
      <div className="article-carousel">轮播</div>
    )
  }
}
