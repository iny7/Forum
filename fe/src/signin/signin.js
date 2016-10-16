import React from 'react';

//Component not component!!!!!!!!!!
class SignIn extends React.Component {

  //in ES6, you can not use getIntialState() {} to initial react component
  constructor(props, context) {
      super(props, context);
  }

  render() {
    return (
      <section className="banner">SignIn</section>
    );
  }
}

export default SignIn;