import _ from 'lodash';
import {
  FETCH_INTERESTS, SELECTION_UPDATED
} from '../actions/types';

export default (state = {}, action) =>{
  switch(action.type){
    case FETCH_INTERESTS:
      return {...state, ..._.mapKeys(action.payload.data, 'id')};
    case SELECTION_UPDATED:
      return {...state, ...action.payload};
    default:
      return state;
  }
}