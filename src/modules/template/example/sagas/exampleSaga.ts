import { call } from "redux-saga/effects";
import { ExampleActions } from "src/modules";
import API from "../../../../api"
export function* sagaExample(actions: ExampleActions) {
	try {
		const voteList = yield call(API.get,"building");
		console.log("run saga");
		console.log(voteList);
		
	} catch (error) {
		
	}
}