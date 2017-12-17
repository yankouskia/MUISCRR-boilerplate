import { takeEvery, call, put } from 'redux-saga/effects';
import { INITIAL_LOADING, INITIAL_LOADING_SUCCESS } from '../constants/actions';
import { get as getFromStorage } from '../services/storage';

const USER_NAME_KEY = 'user_name';

function* initialLoadingFunc({ payload }) {
  const name = payload;
  const username = yield call(getFromStorage, USER_NAME_KEY, name);

  yield put({
    type: INITIAL_LOADING_SUCCESS,
    payload: { username },
  });
}

export default function* initialLoading() {
  yield takeEvery(INITIAL_LOADING, initialLoadingFunc);
}
