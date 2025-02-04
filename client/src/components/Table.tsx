import React, { useEffect } from 'react';
import { Employee } from '../utils/type';
import { useNavigate } from 'react-router-dom';

const Table = () => {
    const navigate= useNavigate();
    const [employees, setEmployees] = React.useState<Employee[]>([]);

    const getEmployees = async () => {
        try{
            const response = await fetch("http://localhost:5000/employees");
            if (!response.ok){
                throw new Error("Unable to fetch employees"); 
            }

            const data = await response.json();
            setEmployees(data);
        }
        catch(error){
            console.log(error);
        }
    }

   
    const deleteEmployees = async (id:number) => {
        try{
            await fetch(`http://localhost:5000/employees/${id}`, {
                method: "DELETE"
            })
            setEmployees(employees.filter((employee) => employee.id !== id));
        }
        catch(error){
            console.log("unable to delete ", error);
        }
    }

    useEffect(() => {
        getEmployees();
    },[]);

    const TABLE_COLUMNS = [
        "First Name",
        "Last Name",
        "Email",
        "Status",
        "Locked",
        "Action"
    ]

    return (
        <div className="overflow-y-auto px-8 py-4">
            <table className='w-full border border-collapse items-center justify-center text-center'>
                <thead className="bg-grey-200">
                    {TABLE_COLUMNS.map((column) => (
                        <th className={`px-2 py-2 ${column === "Action" ? "sticky right-0 w-[150px]" : ""}`}>{column}</th>
                    ))}
                </thead>
                <tbody className="bg-grey-200">
                    {employees.map((employee) => {
                      
                        return (
                            <tr key={employee.id}>
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.email}</td>
                                <td>{employee.status}</td>
                                <td>{employee.locked}</td>
                                <td className="sticky right-0 px-2 py-2 flex flex-row justify-around ">
                                    <button className="bg-white text-black border-1 border-black py-1 px-2 rounded" onClick={() => {navigate(`/edit/${employee.id}`)}}>Edit</button>
                                    <button className="bg-red-500 text-white border-1 border-red-500 py-1 px-2 rounded" onClick={() => {deleteEmployees(employee.id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>);
};

export default Table;   