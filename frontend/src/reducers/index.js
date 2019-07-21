import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import interestReducer from './interestReducer';
import factoidReducer from './factoidReducer';

export default combineReducers({
  factoids: factoidReducer,
  form: formReducer,
  interests: interestReducer
});