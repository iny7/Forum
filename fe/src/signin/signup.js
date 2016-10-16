import React from 'react';

//Component not component!!!!!!!!!!
class SignUp extends React.Component {

  //in ES6, you can not use getIntialState() {} to initial react component
  constructor(props, context) {
      super(props, context);
  }

  render() {
    return (
      <section className="banner">SignUp</section>
    );
  }
}

export default SignUp;