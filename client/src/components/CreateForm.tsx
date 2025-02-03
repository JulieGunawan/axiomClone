import React, { useCallback, useState } from "react";
import debounce from "lodash/debounce";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    status: boolean;
}
const CreateForm = () =>{
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        status: true,
    })

    const debounceHandleChange = useCallback(debounce((name: string, value: string)=>{
        console.log(name, value);
        setFormData((prev)=>({
            ...prev,
            [name]: name === "status" ? value === "true" : value
        }))
        console.log("formData", formData);
    },500),[]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        debounceHandleChange(name, value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }
    
    return(
        <div className="w-full h-screen max-w-xs flex flex-col">
            <form className="bg-white shadow-md rounded px-8 py-6 mb-4 flex flex-col gap-4" onSubmit={handleSubmit}>
                <input type="text" name="firstName" className="form-control border border-gray-300 p-2 rounded-md focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" placeholder="First Name" defaultValue={formData.firstName} onChange={handleChange}/> 
                <input type="text" name="lastName" className="form-control border border-gray-300 p-2 rounded-md focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" placeholder="Last Name" defaultValue={formData.lastName} onChange={handleChange}/> 
                <input type="text" name="email" className="form-control border border-gray-300 p-2 rounded-md focus:outline-none shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" placeholder="Email" defaultValue={formData.email} onChange={handleChange}/> 
                <div className="relative inline-block text-left">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                    <select id="status" name="status" className="w-full rounded-md bg-white border border-gray-300 p-2 focus:outline-none ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success rounded-md border-1 px-3 py-2 hover:bg-black hover:text-white">Create</button>
            </form>
        </div>
    )
}

export default CreateForm