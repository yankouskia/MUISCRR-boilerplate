import { INITIAL_LOADING_SUCCESS } from '../constants/actions';

export default (state, action) => {
  switch (action.type) {
    case INITIAL_LOADING_SUCCESS:
      return state.set('isLoaded', true);
    default:
      return state;
  }
};
