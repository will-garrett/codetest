import _ from 'lodash';
import {
  FETCH_INTERESTS
} from '../actions/types';

export default (state = {}, action) =>{
  switch(action.type){
    case FETCH_INTERESTS:
      return {...state, ..._.mapKeys(action.payload.data, 'id')};
    default:
      return state;
  }
}