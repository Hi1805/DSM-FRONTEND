import { TypeTab } from "types";

export * from "./route";
export const PAGE = 1;
export const SIZE = 8;
export const TABS: Array<{
  type: TypeTab;
  render: string;
}> = [
  {
    type: "teacher",
    render: "Teachers",
  },
  {
    type: "student",
    render: "Students",
  },
  {
    type: "email",
    render: "Send Email",
  },
  {
    type: "history",
    render: "History Login",
  },
];
