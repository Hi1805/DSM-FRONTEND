import {
	EXAMPLE_FETCH,
} from './constants';

export interface TransactionsListFetch {
	type: typeof EXAMPLE_FETCH;
	payload: {
		name: string;
	};
}

export type ExampleActions = TransactionsListFetch 

export const exampleFetch = (payload: TransactionsListFetch['payload']): TransactionsListFetch => ({
	type: EXAMPLE_FETCH,
	payload,
});

