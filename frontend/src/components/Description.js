import React from 'react';

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
        <h3>{this.state.description}</h3>
      </div>
    );
  }
}
export default Description;
