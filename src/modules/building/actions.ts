import {
	BUILDING_FETCH, BUILDING_FETCH_DATA, BUILDING_UPDATE,
} from './constants';
import { BuildingsState } from './types';

export interface BuildingListFetch {
	type: typeof BUILDING_FETCH;
}
export interface BuildingListData extends BuildingsState{
	type: typeof BUILDING_FETCH_DATA;
}
export interface BuildingUpdate{
	type: typeof BUILDING_UPDATE;
	payload:{
		id:string;
	}
}
export type BuildingListAction = BuildingListFetch | BuildingListData;


export const fetchBuildings = (payload: BuildingListFetch): BuildingListFetch => ({
	type:   BUILDING_FETCH,
});

export const getDataBuildings = (payload: BuildingListData["payload"]): BuildingListData =>(({
	payload:payload,
	type: BUILDING_FETCH_DATA,
	loading:true
}))