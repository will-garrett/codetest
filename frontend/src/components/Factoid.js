import React from 'react';

export default class Factoid extends React.Component{
  
  render(){
    /**
     * delete update buttons
     */
    if(!this.props.fact){
      return null;
    }

    return (
      <div>
        {this.props.fact}
      </div>
    )
  }
}