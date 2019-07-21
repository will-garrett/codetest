import {
  FETCH_INTERESTS,
  FETCH_FACTOIDS,
  CREATE_FACTOID,
  DELETE_FACTOID,
  EDIT_FACTOID,
} from './types';

import backend from '../apis/backend';

export const fetchInterests = () => async dispatch => {
  const response = await backend.get('/interests');
  dispatch({ type: FETCH_INTERESTS, payload: response.data });
}
export const fetchFactoids = (interest_id) => async dispatch =>{
  const response = await backend.get(`/interest/${interest_id}/factoids`);
  dispatch({type: FETCH_FACTOIDS, payload: response.data });
}