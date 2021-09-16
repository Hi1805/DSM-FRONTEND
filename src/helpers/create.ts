import { toNumber } from "lodash";
import {profileTemplate} from "../services"
export const createID = (type:"student"|"teacher",total:number,info:profileTemplate)=>{
    const code = type ==="student" ? "ST" :"TC";
    const year = new Date(info.date_of_birth).getFullYear();
    return type=== "student"? code+info.class+year+total : code+year+toNumber(total+1);
}