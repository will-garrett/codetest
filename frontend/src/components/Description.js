import React from 'react';

import { connect } from 'react-redux';
import { selectionUpdated } from '../actions';
class Description extends React.Component{
  render(){
    return (
      <div>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return state;
}
export default connect(mapStateToProps, {selectionUpdated})(Description);