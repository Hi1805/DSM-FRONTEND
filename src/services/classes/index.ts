import {toNumber ,toString} from "lodash"
import { db } from ".."
export interface ClassAttributes{
    id:number;
    values:string[];
    total:number;
}
export async function  getAllClass(){
    try {
        return db.collection("classes").get().then((query)=>{
            const listClasses:ClassAttributes[] = []
            query.forEach((Class)=>{
                listClasses.push({
                    id: toNumber(Class.id),
                    total:toNumber(Class.data().total),
                    values:Class.data().values as string[],
                })
            })
            return listClasses;
        })
    } catch (error) {
        return [];
    }
}

export const updateTotalGrade= (id_grade:number,new_total:number)=>{
    console.log(new_total);
    
     return db.collection("classes").doc(toString(id_grade)).set({total:new_total},{merge:true});
}