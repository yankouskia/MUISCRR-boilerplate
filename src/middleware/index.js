import { fork, all } from 'redux-saga/effects';

export default function* sagas() {
  yield all(
    [
      // here should be sagas
    ].map(fork),
  );
}
