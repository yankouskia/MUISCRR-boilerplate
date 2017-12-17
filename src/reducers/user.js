import {
  SAVE_USER_NAME_SUCCESS,
  INITIAL_LOADING_SUCCESS,
} from '../constants/actions';

export default (state, action) => {
  switch (action.type) {
    case SAVE_USER_NAME_SUCCESS:
      return state.set('name', action.payload);
    case INITIAL_LOADING_SUCCESS:
      return state.set('name', action.payload.username);
    default:
      return state;
  }
};
