import React from 'react';

import { Header } from 'semantic-ui-react';
class Description extends React.Component{
  state = {
    description: null
  }
  updateDescription = (description) => {
    this.setState({description})
  }
  render(){
    return (
      <div>
        <Header>{this.state.description}</Header>
      </div>
    );
  }
}
export default Description;
