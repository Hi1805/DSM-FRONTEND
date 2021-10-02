
import { RootState } from '../';
import { BuildingsState  } from './types';

export const selectBuildings = (state: RootState): BuildingsState=>state.building.buildings;

