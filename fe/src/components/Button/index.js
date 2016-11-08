import React from 'react'

import './style.sass'

//Component not component!!!!!!!!!!
class Button extends React.Component {

  //in ES6, you can not use getIntialState() {} to initial react component
  constructor(props, context) {
      super(props, context);
  }

  render() {
    const { color="default", klass, block=false } = this.props
    return (
      <button
        className={'btn '+ klass}
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;