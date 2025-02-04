export type Employee = {
    id: number;
    firstname: string;
    lastname: string;
    email?: string;
    password?: string;
    status: string;
    inPayroll?: boolean;
    locked?: boolean
}