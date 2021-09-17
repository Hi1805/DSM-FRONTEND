import { ClassAttributes, db, updateTotalGrade } from ".."
import { ProfileTemplate } from "../types";
import { toNumber } from 'lodash';

export const addTeacher = async (id:string,infoGrade:ClassAttributes,teacher:ProfileTemplate) => {    
    // update total
    return db.collection("teachers").doc(id).set({
        ...teacher,
        id:id
    }).then(async ()=>{
       await updateTotalGrade(infoGrade.id,toNumber(infoGrade.total + 1));
    });
}
export const getListTeacher = async () =>{
    return db.collection("teachers").get().then((query)=>{
        const list:ProfileTemplate[] = [];
        query.forEach((teacher)=>{
            list.push({...teacher.data() as ProfileTemplate})
        })
        return list;
    })
}