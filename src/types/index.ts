export interface PostProps {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface DepartmentProps {
    department: string;
    sub_departments: string[];
}

export interface LoginProps {
    name: string;
    phone: number;
    email: string;
}