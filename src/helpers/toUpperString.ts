import { toLower } from "lodash";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const toUpperString = (string: string): string => {
  return string
    .split(" ")
    .map((item) => capitalizeFirstLetter(toLower(item.trim())))
    .join(" ");
};
