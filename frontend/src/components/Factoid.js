import React from 'react';
import {
  Message, 
//  Icon
} from 'semantic-ui-react';
export default class Factoid extends React.Component{
  dismiss = ()=>{
    // Delete hook
    //this.props.fact_id;
  }
  render(){
    if(!this.props.fact){
      return null;
    }

    return (
      <Message 
        icon='bullhorn'
        content={this.props.fact}
        onDismiss={this.dismiss}   
      />
    )
  }
}