export interface Teacher {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  email: string;
  class?: string;
  address: string;
  grade?: number;
}

export interface ListTeacherState {
  payload: {
    teachers: Teacher[];
    loading: boolean;
  };
}
export interface TotalTeacherState {
  payload: {
    total: number;
    loading: boolean;
  };
}
