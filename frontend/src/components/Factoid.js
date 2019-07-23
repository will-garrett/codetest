import React from 'react';
import {
  Segment, 
  Grid, 
  Icon, 
  Form,
  Menu
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { editFactoid, deleteFactoid } from '../actions';

import FactoidUpdateForm from './FactoidUpdateForm';

class Factoid extends React.Component{
  constructor(props){
    super(props);
    this.update_ref = React.createRef();
  }
  state = { visible: true , edit: false}
  handleUpdate = (e) => {
    e.preventDefault();
  }
  handleDelete = () => {
    this.props.deleteFactoid(this.props.fact_id);
    this.setState({ visible: false });
  }
  handleEdit = ()=>{
    this.setState({ edit: !this.state.edit });
  }
  update = (value) => {
    this.props.editFactoid(this.props.fact_id, value);
    this.setState({edit: false});
  }
  render(){
    if(!this.props.fact){
      return null;
    }
    if(this.state.visible){
      return (
        <Segment raised>
            <Grid>
              <Grid.Row columns={12} verticalAlign="middle">
                <Grid.Column stretched width={10}>
                  {this.state.edit ? <FactoidUpdateForm updater={this.update} ref={this.update_ref} id={this.props.fact_id} fact={this.props.fact} /> : this.props.fact}
                </Grid.Column>  
                <Grid.Column width={2} textAlign="right" float="right">
                <Menu size="mini" compact text icon="labeled">
                    <Menu.Item position="right" name='edit' onClick={this.handleEdit}>
                      {this.state.edit ?  <Icon name="cancel" />:<Icon name='pencil' />}
                      {this.state.edit ? `Cancel`:`Edit`}
                    </Menu.Item>
            
                    <Menu.Item
                      position="right"
                      name='delete'
                      onClick={this.handleDelete}>
                      <Icon name='trash' />
                      Delete
                    </Menu.Item>
                  </Menu>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            </Segment>
        );
    }
    else{
      return null;
    }
  }
}

function mapStateToProps(state, props){
  console.log("Mstp", state, props);
  return state;
}

export default connect(mapStateToProps, {editFactoid, deleteFactoid})(Factoid);