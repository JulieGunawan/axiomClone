import React, { useCallback, useEffect } from "react";
import { Employee } from "../utils/type";
import debounce from "lodash/debounce";

const EditForm = ({id}:{id:number}) =>{
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

    const handleSubmit = async (id:number) => {
        try{
            const body = {formData};
            console.log("body", body);
            await fetch(`http://localhost:5000/employees/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body.formData)
            })
        } 
        catch(error){
            console.log("unable to edit ", error);
        }
    }

    const debounceHandleChange = useCallback(debounce((name: string, value: string)=>{
        setFormData((prev)=>({
            ...prev,
            [name]: name === "status" ? value === "true" : value
        }))
    }, 500), [])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        debounceHandleChange(name, value);
        console.log("formData", formData);
    }

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
            <form className="bg-white shadow-md rounded px-8 py-6 mb-4 flex flex-col gap-4" onSubmit={()=>handleSubmit(id)}>
                <input type="text" name="firstName" className="form-control border border-gray-300 p-2 rounded-md focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" placeholder="First Name" defaultValue={formData.firstname} onChange={handleChange}/> 
                <input type="text" name="lastName" className="form-control border border-gray-300 p-2 rounded-md focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" placeholder="Last Name" defaultValue={formData.lastname} onChange={handleChange}/> 
                <input type="text" name="email" className="form-control border border-gray-300 p-2 rounded-md focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" placeholder="Email" defaultValue={formData.email} onChange={handleChange}/> 
                <div className="relative inline-block text-left">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                    <select id="status" name="status" className="w-full rounded-md bg-white border border-gray-300 p-2 focus:outline-none ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <option value="active">Active</option>
                        <option value="non-active">Non-Active</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success rounded-md border-1 px-3 py-2 hover:bg-black hover:text-white">Update</button>
            </form>
        </div>
     
    );
}

export default EditForm;