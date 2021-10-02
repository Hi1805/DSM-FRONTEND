import { combineReducers } from 'redux';
import { buildingListReducer } from './building';
export const buildingReducer = combineReducers({
	buildings: buildingListReducer,
});