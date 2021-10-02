import { call } from "redux-saga/effects";
import { BuildingListAction, getDataBuildings } from "..";
import API from "../../../api"
export function* sagaFetchBuildings(actions: BuildingListAction) {
	try {
		const voteList = yield call(API.get,"building");
        getDataBuildings(voteList);
	} catch (error) {
		
	}
}