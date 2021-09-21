import { ClassAttributes, db, updateTotalGrade } from "..";
import { ProfileTemplate } from "../../types";

export const addTeacher = (
  id: string,
  infoGrade: ClassAttributes,
  teacher: ProfileTemplate
) => {
  return db
    .collection("teachers")
    .doc(id)
    .set({
      ...teacher,
      id: id,
    })
    .then(() => {
      const newTotal = infoGrade.total + 1;
      return updateTotalGrade(infoGrade.id, newTotal);
    });
};

export const getListTeacher = async (pageBegin: number,pageSize: number) => {
   const b =  (await db.collection("teachers").get()).size;
   console.log(b);
   
  const first = db
    .collection("teachers")
    .orderBy("first_name")
    .limit(pageBegin);

  return first.get().then(async (documentSnapshots) => {
    var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
    const next = db
      .collection("teachers")
      .orderBy("last_name")
      .startAfter(lastVisible)
      .limit(pageSize);
    return await next.get().then((doc) => {
      const list: ProfileTemplate[] = [];
      doc.forEach((teacher) => {
        list.push({ ...(teacher.data() as ProfileTemplate) });
      });
      return list;
    });
  });
};
export const setTeacher = (id: string, teacher: ProfileTemplate) => {
  return db.collection("teachers").doc(id).set(teacher, { merge: true });
};
export const deleteTeacher = (id: string) => {
  return db.collection("teachers").doc(id).delete();
};
