import { takeLatest } from 'redux-saga/effects';
import { EXAMPLE_FETCH } from '../constants';
import { sagaExample } from './exampleSaga';

export function* rootSagaExample() {
	yield takeLatest(EXAMPLE_FETCH, sagaExample);
}
