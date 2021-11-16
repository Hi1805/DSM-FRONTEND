import { ROUTES } from "../constants/constants";

export const isSafePath = (path: string): boolean => {
  return ROUTES.includes(path);
};
