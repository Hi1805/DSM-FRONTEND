import { ClassAttributes, db, updateTotalGrade } from ".."
import { toNumber } from 'lodash';
import { ProfileTemplate } from "../../types";

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
export const setStudent = (id:string, teacher:ProfileTemplate)=>{
    return db.collection("students").doc(id).set({
        ...teacher,
        id:id
    })
}
export const deleteStudent = async (id:string) =>{
    return db.collection("students").doc(id).delete();
}