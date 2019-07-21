import React from 'react';

export default class Factoids extends React.Component{
  updateSelection(selection){
    console.log("Factoid selection", selection);
  }
  componentDidMount(){
    console.log("Factoids", this.props);
  }
  render(){
    return (
      <div>
        hello
      </div>
    )
  }
}