import React from 'react'

import './style.sass'

//Component not component!!!!!!!!!!
class InlineInput extends React.Component {

  //in ES6, you can not use getIntialState() {} to initial react component
  constructor(props, context) {
      super(props, context);
  }

  render() {
    const { icon, type='text', value, placeholder, klass } = this.props
    return (
      <div className="form-group">
        <div className="input-group">
          {this.props.icon ?
            <div className="input-group-addon">
              <i className={"fa fa-" + icon}></i>
            </div>
             : null}
          <input
            className={'form-control ' + klass}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={this.props.handleChange}/>
          {this.props.children}
        </div>
      </div>
    )
  }
}

exports.InlineInput = InlineInput