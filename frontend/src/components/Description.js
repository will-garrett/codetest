import React from 'react';

import { Header, Segment } from 'semantic-ui-react';
class Description extends React.Component{
  state = {
    description: null
  }
  updateDescription = (description) => {
    this.setState({description})
  }
  render(){
    return (
      <Segment raised>
        <Header>{this.state.description}</Header>
      </Segment>
    );
  }
}
export default Description;
