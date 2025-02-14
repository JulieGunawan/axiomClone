import React, { useEffect } from 'react';
import { Employee } from '../utils/type';
import { useNavigate } from 'react-router-dom';
import DeleteModal from './DeleteModal';

const Table = () => {
    const navigate= useNavigate();
    const [employees, setEmployees] = React.useState<Employee[]>([]);
    const [selectedId, setSelectedId] = React.useState(0);

    const getEmployees = async (signal: AbortSignal) => {
        try{
            const response = await fetch("http://localhost:5000/employees", {signal});
            if (!response.ok){
                throw new Error("Unable to fetch employees"); 
            }
            const data = await response.json();
            setEmployees(data);
        }
        catch(error){
            if (error instanceof Error) {
                if (error.name === "AbortError") {
                    console.log("Fetch request was aborted");
                } else {
                    console.log("unable to delete ", error);
                }
            }
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
        const controller = new AbortController();   
        const signal = controller.signal;
        getEmployees(signal);
        return () => controller.abort();
    },[]);

    const TABLE_COLUMNS = [
        "First Name",
        "Last Name",
        "Email",
        "Status",
        "Locked",
        "Action"
    ]

    const[isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="overflow-y-auto px-8 py-4">
            <table className='w-full border border-collapse items-center justify-center text-center'>
                <thead className="bg-grey-200">
                    <tr>
                        {TABLE_COLUMNS.map((column) => (
                            <th key={`${column.indexOf(column)}-${column}`} className={`px-2 py-2 ${column === "Action" ? "sticky right-0 w-[150px]" : ""}`}>{column}</th>
                        ))}
                    </tr>
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
                                    <button className="bg-red-500 text-white border-1 border-red-500 py-1 px-2 rounded" 
                                        onClick={() => {
                                            setIsOpen(true);
                                            setSelectedId(employee.id);
                                            // deleteEmployees(employee.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
            {isOpen && <DeleteModal deleteEmployees={deleteEmployees} id={selectedId} setIsOpen={setIsOpen}/>}
        </div>);
};

export default Table;   