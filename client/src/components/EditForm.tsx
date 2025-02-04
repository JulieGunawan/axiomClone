import React, { useEffect } from "react";
import { Employee } from "../utils/type";
const EditForm = (id:number) =>{

    const handleSubmit = async (id:number): React.FormEvent<HTMLFormElement> => {
        try{
            await fetch(`http://localhost:5000/employees/${id}`, {
                method: "PUT",
                
            })
        }
        catch(error){
            console.log("unable to edit ", error);
        }
    }

    const [formData, setFormData] = React.useState<Employee>({
        id: 0,
        firstname: "",
        lastname: "",
        email: "",
        status: "active",
        password: "",
        inPayroll: false,
        locked: false
    });

    const fetchEmployee = async (id:number) => {
        try{
            const response = await fetch(`http://localhost:5000/employees/${id}`);
            if (!response.ok){
                throw new Error("Unable to fetch employee"); 
            }

            const data = await response.json();
            setFormData(data);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchEmployee(id);
    }, [id]);
    
    return (
        <div className="w-full h-screen max-w-xs flex flex-col">
            <form className="bg-white shadow-md rounded px-8 py-6 mb-4 flex flex-col gap-4" onSubmit={handleSubmit(id)}>
                <input type="text" name="firstName" className="form-control border border-gray-300 p-2 rounded-md focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" placeholder="First Name" defaultValue={formData.firstName} onChange={handleChange}/> 
                <input type="text" name="lastName" className="form-control border border-gray-300 p-2 rounded-md focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" placeholder="Last Name" defaultValue={formData.lastName} onChange={handleChange}/> 
                <input type="text" name="email" className="form-control border border-gray-300 p-2 rounded-md focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" placeholder="Email" defaultValue={formData.email} onChange={handleChange}/> 
                <div className="relative inline-block text-left">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                    <select id="status" name="status" className="w-full rounded-md bg-white border border-gray-300 p-2 focus:outline-none ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <option value="active">Active</option>
                        <option value="non-active">Non-Active</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success rounded-md border-1 px-3 py-2 hover:bg-black hover:text-white">Create</button>
            </form>
        </div>
     
    );
}

export default EditForm;