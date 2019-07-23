import React from 'react'

import {Form, Button, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {createFactoid} from '../actions';

class FactoidForm extends React.Component {
  state = {val: '', interest: null}
  newFact = (e)=>{
    e.preventDefault();
    this.props.createFactoid(this.props.selected, {fact: this.state.val}); 
  }
  handleUpdate = (e)=>{
    console.log(this.state, this.props);
    this.setState({val: e.target.value});
  }
  setInterest(sel){
    this.setState({interest: sel});
  }
  render() {
    return (
      <Form>
        <Form.Field>
          <label htmlFor="factoid">Add Your Factoid: </label>
          <TextArea
            placeholder='Example: People would generally describe me as no nonsense, brief, and "to the point", but bad at writing titles.'
            defaultValue={this.state.val} name="new_factoid"
            onChange={this.handleUpdate}
          />
          </Form.Field>
        <Button onClick={this.newFact}>Create New Factoid</Button>
      </Form>
    );
  }
}
const mapStateToProps = (state,props)=>{
  return {...state, selected: props.selected};
}
export default connect(mapStateToProps, {createFactoid})(FactoidForm);