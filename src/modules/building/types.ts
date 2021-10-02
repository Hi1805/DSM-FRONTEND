import { CommonState } from "../types";
export interface Building {
  id: string;
  name: string;
  description: string;
  numbersOfFloors: number;
  location: {
    x: number;
    y: number;
  };
  design_url: string;
  facility?: {
    id: string;
    name: string;
    address: string;
    description: string;
    number_of_buildings: number;
    location: {
      x: number;
      y: number;
    };
    bounds: string;
    design_url: string;
    background_image: string;
    updated_at: Date;
    keywords: string;
  };
}
export interface BuildingsState extends CommonState {
  payload: Building[];
  loading: boolean;
}
