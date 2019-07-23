import React from 'react';
import {
  Message, 
  Grid, 
  Icon, 
  GridRow, 
  GridColumn,
  Modal,
  Button
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
        onDismiss={this.dismiss}   
      >
     <Grid>
      <GridRow>
        <GridColumn stacked padded="horizontally" verticalAlign="middle" centered width={1}>

          <Icon link circular inverted name='pencil' />
        
        </GridColumn>
        <GridColumn stacked padded="horizontally" verticalAlign="middle"  centered width={1}>
        
          <Icon link circular inverted color="red" name='trash' />
        </GridColumn>      
        
        <GridColumn width={14}>
          {this.props.fact}
        </GridColumn>
      </GridRow>
      </Grid>  
      </Message>
    )
  }
}