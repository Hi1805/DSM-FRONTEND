import { toNumber, toString } from "lodash";
import React from "react";
import {
  ClassAttributes,
  deleteStudent,
  addStudent,
  getListTeacher,
  deleteTeacher,
  setStudent,
} from "..";
import { createID } from "../../helpers";
import { ProfileTemplate } from "../../types";
import { addTeacher, setTeacher } from "../teachers/index";
export type TypeTab = "teacher" | "student" | "email";

export interface FunctionGlobal {
  setTypeTab: (tab: TypeTab) => void;
  deleteItem: (id: string) => Promise<boolean>;
  handleEdit: (id: string, teacher: ProfileTemplate) => Promise<void>;
  handleAdd: (
    infoGrade: ClassAttributes,
    teacher: ProfileTemplate
  ) => Promise<void>;
}
export interface rootState extends FunctionGlobal {
  teachers: ProfileTemplate[];
  loadingTeachers: boolean;
  students: ProfileTemplate[];
  loadingStudents?: boolean;
  typeTab: TypeTab;
}
const inititalState: rootState = {
  loadingStudents: true,
  loadingTeachers: true,
  students: [],
  teachers: [],
  typeTab: "teacher",
  handleAdd: () => new Promise(() => {}),
  setTypeTab: () => {},
  deleteItem: (id: string) => new Promise(() => {}),
  handleEdit: () => new Promise(() => {}),
};
const GlobalContext = React.createContext<rootState>(inititalState);

const GlobalProvider: React.FC = ({ children }) => {
  const [listTeacherState, setListTeacherState] = React.useState<
    ProfileTemplate[]
  >([]);
  const [listStudentsState, setListStudentsState] = React.useState<
    ProfileTemplate[]
  >([]);
  const [loadingTeachersState, setLoadingTeachersState] =
    React.useState<boolean>(true);
  const [typeTabState, setTypeTabState] = React.useState<TypeTab>("teacher");

  React.useEffect(() => {
    (async () => {
      const teachers = await getListTeacher(1,2);
      setListTeacherState(teachers);
      setLoadingTeachersState(false);
    })();
  }, []);
  const handleSetTypeTab = (tab: TypeTab) => {
    setTypeTabState(tab);
  };

  const handleAddTeacher = async (
    infoGrade: ClassAttributes,
    teacher: ProfileTemplate
  ) => {
    const codeID = toString(
      createID("teacher", toNumber(infoGrade.total + 1), teacher)
    );
    return addTeacher(codeID, infoGrade, teacher).then(async () => {
      setListTeacherState([...listTeacherState, { ...teacher, id: codeID }]);
    });
  };
  const handleAddStudent = async (
    infoGrade: ClassAttributes,
    student: ProfileTemplate
  ) => {
    const codeID = toString(
      createID("student", toNumber(infoGrade.total + 1), student)
    );
    return addStudent(codeID, infoGrade, student);
  };

  const handleEditTeacher = (id: string, newTeacher: ProfileTemplate) => {
    const newListTeacher = listTeacherState.map((teacher) => {
      if (teacher.id === id) {
        return { ...newTeacher, id: id };
      }
      return teacher;
    });
    return setTeacher(id, newTeacher).then(() => {
      setListTeacherState([...newListTeacher]);
    });
  };
  const handleEditStudent = (id: string, teacher: ProfileTemplate) => {
    return setStudent(id, teacher);
  };
  const handleDelete = async (id: string) => {
    if (typeTabState === "teacher") {
      const newListTeacher = listTeacherState.filter(
        (teacher) => teacher.id !== id
      );
      return await deleteTeacher(id).then(() => {
        setListTeacherState([...newListTeacher]);
        return true;
      });
    }
    const newListStudent = listStudentsState.filter(
      (teacher) => teacher.id !== id
    );
    return await deleteStudent(id).then(() => {
      setListStudentsState([...newListStudent]);
      return true;
    });
  };

  const data: rootState = {
    teachers: listTeacherState,
    loadingTeachers: loadingTeachersState,
    students: listStudentsState,
    typeTab: typeTabState,
    handleAdd: typeTabState === "student" ? handleAddStudent : handleAddTeacher,
    deleteItem: handleDelete,
    setTypeTab: handleSetTypeTab,
    handleEdit:
      typeTabState === "student" ? handleEditStudent : handleEditTeacher,
  };
  return (
    <GlobalContext.Provider value={{ ...data }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
