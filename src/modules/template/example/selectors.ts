
import { RootState } from '../..';
import { ExampleState } from './types';

export const selectExample = (state: RootState): ExampleState=>state.template.example;

