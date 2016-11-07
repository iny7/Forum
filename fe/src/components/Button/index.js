import React from 'react'

import './style.sass'

//Component not component!!!!!!!!!!
class Button extends React.Component {

  //in ES6, you can not use getIntialState() {} to initial react component
  constructor(props, context) {
      super(props, context);
  }

  render() {
    const { color="default", size="md" } = this.props
    let sizeClass  = 'btn-' + size
    let colorClass = 'btn-' + color
    return (
      <button
        className={['btn', sizeClass, colorClass].join(' ')}
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;