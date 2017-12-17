import { takeEvery, call, put, select } from 'redux-saga/effects';
import { formValueSelector, reset } from 'redux-form/immutable';
import {
  SEND_FEEDBACK,
  SEND_FEEDBACK_SUCCESS,
  SEND_FEEDBACK_FAILURE,
} from '../constants/actions';
import { post } from '../services/request';
import { REQUIRED_FIELDS, FORM_NAME } from '../constants/feedback-form';

function* sendFeedbackFunc() {
  try {
    const formSelector = yield call(formValueSelector, FORM_NAME);
    const values = yield select(formSelector, ...REQUIRED_FIELDS);
    yield call(post, '/send-feedback', JSON.stringify(values));
    yield put({ type: SEND_FEEDBACK_SUCCESS });
    yield put(reset(FORM_NAME));
  } catch (err) {
    yield put({ type: SEND_FEEDBACK_FAILURE, err });
  }
}

export default function* sendFeedback() {
  yield takeEvery(SEND_FEEDBACK, sendFeedbackFunc);
}
