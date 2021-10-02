import { BuildingListAction } from './actions';
import {
	BUILDING_FETCH, BUILDING_FETCH_DATA,
} from './constants';
import { BuildingsState } from './types';

export const initialBuildings: BuildingsState = {
	payload: [],
	loading: false,
};

export const buildingListReducer = (
	state = initialBuildings,
	action: BuildingListAction,
): BuildingsState => {
	switch (action.type) {
		case BUILDING_FETCH:
			return {
				...state,
				loading: true,
				error: undefined,
			};
		case BUILDING_FETCH_DATA :	
			const data = action.payload;
			return {
				...state,
				loading:false,
				payload: data,
			}
		default:
			return state;
	}
};

