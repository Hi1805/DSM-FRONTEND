import { ROUTES } from '../constants';

export const isSafePath = (path: string): boolean => {
  return ROUTES.includes(path);
};
