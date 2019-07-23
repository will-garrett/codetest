import _ from 'lodash';
import {
  EDIT_FACTOID,
  DELETE_FACTOID,
  CREATE_FACTOID
} from '../actions/types';

export default (state = {}, action) =>{
  switch(action.type){
    case CREATE_FACTOID:
      return {...state, fact: action.payload.fact}
    case EDIT_FACTOID:
      return {...state, fact: action.payload.fact}
    case DELETE_FACTOID:
      return {...state};
    default:
      return state;
  }
}