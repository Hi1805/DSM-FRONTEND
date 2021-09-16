import { db } from ".."
import { profileTemplate } from "../types";

export const addTeacher = async (teacher:profileTemplate) => {    
    // update total
    return db.collection("teachers").doc(teacher.id).set(teacher).then();
}