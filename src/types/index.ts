export interface PostProps {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface DepartmentProps {
    dept_name: string;
    sub_dept: [string];
}

export interface LoginProps {
    name: string;
    phone: number;
    email: string;
}