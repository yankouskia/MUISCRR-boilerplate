import { takeEvery, call, put } from 'redux-saga/effects';
import { SAVE_USER_NAME, SAVE_USER_NAME_SUCCESS } from '../constants/actions';
import { set as setToStorage } from '../services/storage';

const USER_NAME_KEY = 'user_name';

function* saveUserNameFunc({ payload }) {
  const name = payload;
  yield call(setToStorage, USER_NAME_KEY, name);
  yield put({
    type: SAVE_USER_NAME_SUCCESS,
    payload: name,
  });
}

export default function* saveUserName() {
  yield takeEvery(SAVE_USER_NAME, saveUserNameFunc);
}
