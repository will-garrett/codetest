import _ from 'lodash';
import {
  SELECTION_UPDATED,
  FETCH_FACTOIDS,
} from '../actions/types';

export default (state = {}, action) =>{
  switch(action.type){
    case SELECTION_UPDATED:
      return state;
    case FETCH_FACTOIDS:
      return {...state, ...action.payload};
    default:
      return state;
  }
}