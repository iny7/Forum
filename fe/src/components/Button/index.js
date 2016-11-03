import React from 'react'

import './style.sass'

//Component not component!!!!!!!!!!
class Button extends React.Component {

  //in ES6, you can not use getIntialState() {} to initial react component
  constructor(props, context) {
      super(props, context);
  }

  render() {
    return (
      <button
        className="btn btn-default"
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;