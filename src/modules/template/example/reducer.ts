import { ExampleActions } from './actions';
import {
	EXAMPLE_FETCH,
} from './constants';
import { ExampleState } from './types';

export const initialTransactionPriceList: ExampleState = {
	payload: {
		name: 'example'
	},
	loading: false,
};

export const exampleReducer = (
	state = initialTransactionPriceList,
	action: ExampleActions,
): ExampleState => {
	switch (action.type) {
		case EXAMPLE_FETCH:
			return {
				...state,
				loading: true,
				error: undefined,
			};

		default:
			return state;
	}
};

