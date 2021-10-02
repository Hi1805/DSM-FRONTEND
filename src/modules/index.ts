import { combineReducers } from 'redux';
import { all, call } from 'redux-saga/effects';
import { buildingReducer } from './app';
import { BuildingsState } from './building';
import { rootSagaBuilding } from './building/saga';
export * from './building'
export interface RootState {
	building:{
		buildings:BuildingsState;
	}
}
export const rootReducer = combineReducers({
	building: buildingReducer,
});

export function* rootSaga() {
	yield all([
		call(rootSagaBuilding),
	]);
}
