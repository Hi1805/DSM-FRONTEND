import { toString } from "lodash";
export function getListClasses(grade: number): Array<string> {
  const list = require("data/classes.json");
  if (list[toString(grade)]) {
    return list[toString(grade)].classes;
  }
  return [];
}
