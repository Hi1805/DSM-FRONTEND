import { startCase } from "lodash";

export const toUpperString = (string: string): string => {
  return string
    .split(" ")
    .map((item) => startCase(item.trim()))
    .join(" ");
};
