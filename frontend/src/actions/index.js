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
export const createFactoid = (interest_id, factoid_obj) => async dispatch => {
  const response = await backend.post(`/interest/${interest_id}/factoid`, factoid_obj);
  dispatch({ type: CREATE_FACTOID, payload: {data: response.data, fact: factoid_obj.fact }});
}
export const editFactoid = (id, fact) => async dispatch => {
  console.log("Edit factoid", id);
  const response = await backend.put(`/factoid/${id}`, { fact });
  dispatch({ type: EDIT_FACTOID, payload: { data: response.data, fact }});
}

export const deleteFactoid = (id) => async dispatch => {
  const response = await backend.delete(`/factoid/${id}`);
  dispatch({type: DELETE_FACTOID, payload: { id }});
}