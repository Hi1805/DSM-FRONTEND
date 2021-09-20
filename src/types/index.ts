import { typeTab } from "../services";

export interface ProfileTemplate{
    id:string;
    first_name:string;
    last_name:string;
    date_of_birth:string;
    gender:string;
    email:string;
    class:string;
    address:string;
    grade:number;
}
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