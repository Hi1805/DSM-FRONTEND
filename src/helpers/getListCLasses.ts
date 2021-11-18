export function getListClasses(grade: number): Array<string> {
  const list = require("data/classes.json");
  if (list[grade]) {
    return list[grade].classes;
  }
  return [];
}
