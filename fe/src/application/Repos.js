import React from 'react';

//Component not component!!!!!!!!!!
class Repos extends React.Component {

  //in ES6, you can not use getIntialState() {} to initial react component
  constructor(props, context) {
      super(props, context);
  }

  render() {
    return (
      <section className="Repos">Repos</section>
    );
  }
}

export default Repos;