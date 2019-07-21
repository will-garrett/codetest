import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import interestReducer from './interestReducer';

export default combineReducers({
  form: formReducer,
  interests: interestReducer
});