import { CommonState } from '../../types';
export interface Example {
	name: string;
}
export interface ExampleState extends CommonState {
	payload: Example
	loading: boolean;
}

