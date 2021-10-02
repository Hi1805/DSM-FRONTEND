import { takeLatest } from 'redux-saga/effects';
import { BUILDING_FETCH } from '../constants';
import { sagaFetchBuildings } from './fetchBuildingsSaga';

export function* rootSagaBuilding() {
	yield takeLatest(BUILDING_FETCH, sagaFetchBuildings);
}
