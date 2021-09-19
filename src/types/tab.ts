import { typeTab } from "../services";

export const tabs: Array<{
    type: typeTab,
    render: string;
  }> = [{
    type: "teacher",
    render: "Teachers"
  }, {
    type: "student",
    render: "Students"
  }, {
    type: "email",
    render: "Send E-email"
}];