import { combineReducers } from 'redux-immutable';

import { reducer as form } from 'redux-form/immutable';
import user from './user';
import global from './global';

export default () =>
  combineReducers({
    user,
    global,
    form,
  });
