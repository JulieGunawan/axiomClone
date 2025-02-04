import React from "react";

const DeleteModal = (
{setIsOpen, id, deleteEmployees}:
{ setIsOpen:(isOpen:boolean)=>void, 
  id:number, 
  deleteEmployees:(id:number)=>void
}) => {
    return (
        <div className="fixed inset-0 rounded-lg bg-gray-500 bg-opacity-50 flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center w-[300px] h-[200px]">
        <div className="bg-white p-6 relative">
          <h2 className="text-xl font-semibold">Delete Employee</h2>
          <p className="mt-4">Are you sure you want to delete this employee?</p>
          <div className="mt-6 flex flex-row gap-4 justify-around">
            <button
              onClick={()=>{setIsOpen(false); deleteEmployees(id)}}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-green-600"
            >
              OK
            </button>
            <button
              onClick={()=>{setIsOpen(false)}}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
}

export default DeleteModal;