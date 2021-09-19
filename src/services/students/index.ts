import { ClassAttributes, db, updateTotalGrade } from ".."
import { ProfileTemplate } from "../types";
import { toNumber } from 'lodash';

export const addStudent = async (id:string,infoGrade:ClassAttributes,Student:ProfileTemplate) => {    
    return db.collection("students").doc(id).set({
        ...Student,
        id:id
    }).then(async ()=>{
      return await updateTotalGrade(infoGrade.id,toNumber(infoGrade.total + 1));
    });
}
export const getListStudent = async () =>{
    return db.collection("students").get().then((query)=>{
        const list:ProfileTemplate[] = [];
        query.forEach((student)=>{
            list.push({...student.data() as ProfileTemplate})
        })
        return list;
    })
}
export const deleteStudent = async (id:string) =>{
    return db.collection("students").doc(id).delete();
}