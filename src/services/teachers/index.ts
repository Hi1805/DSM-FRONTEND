import { ClassAttributes, db, updateTotalGrade } from ".."
import { ProfileTemplate } from "../types";

export const addTeacher =  (id:string,infoGrade:ClassAttributes,teacher:ProfileTemplate) => {    
    return db.collection("teachers").doc(id).set({
        ...teacher,
        id:id
    }).then( ()=>{     
     const newTotal = infoGrade.total + 1;
      return updateTotalGrade(infoGrade.id,newTotal);
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
export const deleteTeacher =  (id:string) =>{
    return  db.collection("teachers").doc(id).delete();
}