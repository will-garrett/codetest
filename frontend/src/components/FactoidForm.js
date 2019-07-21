import React from 'react'

import {Form, Button, TextArea} from 'semantic-ui-react';


export default class FactoidForm extends React.Component {
  newFact(e){
    e.preventDefault();
    // TODO CREATE_FACTOID
  }
  render() {
    return (
      <Form>
        <Form.Field>
          <label htmlFor="factoid">Add Your Factoid: </label>
          <TextArea
            placeholder='Example: People would generally describe me as no nonsense, brief, and "to the point", but bad at writing titles.'
            name="factoid"
          />
          </Form.Field>
        <Button onClick={this.newFact}>Create New Factoid</Button>
      </Form>
    );
  }
}
