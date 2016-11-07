import React from 'react'

import './style.sass'

//Component not component!!!!!!!!!!
class InlineInput extends React.Component {

  //in ES6, you can not use getIntialState() {} to initial react component
  constructor(props, context) {
      super(props, context);
  }

  render() {
    const { icon, type='text', value, placeholder } = this.props
    return (
      <div>
        {this.props.icon ? <i className={"fa fa-" + icon}></i> : null}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={this.props.handleChange}/>
        {this.props.children}
      </div>
    )
  }
}

exports.InlineInput = InlineInput