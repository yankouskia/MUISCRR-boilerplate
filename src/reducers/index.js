import { combineReducers } from 'redux-immutable';

import user from './user';

export default () =>
  combineReducers({
    user,
  });
