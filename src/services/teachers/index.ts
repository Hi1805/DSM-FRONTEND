import { db } from ".."
import { profileTemplate } from "../types";

export const addTeacher = async (teacher:profileTemplate) => {
    return db.collection("teachers").doc(teacher.id).set(teacher);
}