import React from 'react';
import Factoid from './Factoid';

export default class Factoids extends React.Component{
  state = {
    factoids: undefined
  }
  setFactoids(data){
    this.setState({factoids: data});
  }
  renderFactoids(factoids){
    if(factoids){
      return factoids.map((entry)=>{
        return <Factoid interest_id={entry.interest_id} key={entry.id} fact={entry.fact} fact_id={entry.id}/>
      });
    }
  }
  render(){
    return (
      <div>
        {this.renderFactoids(this.state.factoids)}
      </div>
    )
  }
}