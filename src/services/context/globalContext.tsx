import { toNumber, toString } from 'lodash';
import React from 'react';
import { ClassAttributes, deleteStudent, ProfileTemplate, addStudent, getListTeacher, deleteTeacher } from '..';
import { createID } from '../../helpers';
import { addTeacher } from '../teachers/index';
export type typeTab = "teacher" | "student" | "email";

export interface rootState {
    teachers: ProfileTemplate[];
    loadingTeachers: boolean;
    students: ProfileTemplate[];
    loadingStudents?: boolean;
    typeTab: typeTab,
    setTypeTab: (tab: typeTab) => void;
    deleteItem: (id: string) => Promise<boolean>;
    handleAdd: (infoGrade: ClassAttributes, teacher: ProfileTemplate) => Promise<void>
}
const inititalState: rootState = {
    loadingStudents: true,
    loadingTeachers: true,
    students: [], teachers: [],
    typeTab: "teacher",
    handleAdd: () => new Promise(() => { }),
    setTypeTab: () => { },
    deleteItem: (id: string) => new Promise(() => { }),
}
const GlobalContext = React.createContext<rootState>(inititalState);

const GlobalProvider: React.FC = ({ children }) => {
    const [listTeacherState, setListTeacherState] = React.useState<ProfileTemplate[]>([]);
    const [listStudentsState, setListStudentsState] = React.useState<ProfileTemplate[]>([]);
    const [loadingTeachersState, setLoadingTeachersState] = React.useState<boolean>(true);
    const [typeTabState, setTypeTabState] = React.useState<typeTab>("teacher");

    React.useEffect(() => {
        (async () => {
            const teachers = await getListTeacher();
            setListTeacherState(teachers);
            setLoadingTeachersState(false);
        })();
    }, []);
    const handleSetTypeTab = (tab: typeTab) => {
        setTypeTabState(tab)
    }

    const handleAddTeacher = async (infoGrade: ClassAttributes, teacher: ProfileTemplate) => {
        const codeID = toString(createID('teacher', toNumber(infoGrade.total + 1), teacher));
        addTeacher(codeID, infoGrade, teacher).then(async () => {
            setListTeacherState([...listTeacherState, { ...teacher, id: codeID }])
        })
    }
    const handleAddStudent = async (infoGrade: ClassAttributes, student: ProfileTemplate) => {
        const codeID = toString(createID('student', toNumber(infoGrade.total + 1), student));
        addStudent(codeID, infoGrade, student);
    }
    const handleDelete = async (id: string) => {
        if (typeTabState === "teacher") {
            const newListTeacher = listTeacherState.filter((teacher) => teacher.id !== id);
            return await deleteTeacher(id).then(() => {
                setListTeacherState([...newListTeacher]);
                return true;
            });
        }
        //
        const newListStudent = listStudentsState.filter((teacher) => teacher.id !== id);
        return await deleteStudent(id).then(() => {
            setListStudentsState([...newListStudent]);
            return true;
        });
    }

    const data: rootState = {
        teachers: listTeacherState,
        loadingTeachers: loadingTeachersState,
        students: listStudentsState,
        typeTab: typeTabState,
        handleAdd: typeTabState === "student" ? handleAddStudent : handleAddTeacher,
        deleteItem: handleDelete,
        setTypeTab: handleSetTypeTab,
    }
    return (
        <GlobalContext.Provider value={{ ...data }}>
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalProvider };