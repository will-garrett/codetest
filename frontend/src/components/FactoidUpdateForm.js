import React from 'react';

import {Form} from 'semantic-ui-react';

export default class FactoidUpdateForm extends React.Component{
  state = {val: ''};
  componentDidMount(){
    this.setState({val: this.props.fact});
  }
  handleUpdate = e => {
    e.preventDefault();
    this.props.updater(this.state.val);
  }
  handleChange = e =>{
    this.state.val = e.target.value;
  }
  render(){
    return (<Form>
      <Form.Input name="fact" onChange={this.handleChange} type='text' defaultValue={this.state.val} action>
      <input />
      <Form.Button color="green" onClick={this.handleUpdate} type='submit'> Save </Form.Button>
      </Form.Input>
    </Form>)
  }
}