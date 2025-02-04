import React from "react";
import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";

const EditPage = () => {
    const {id} = useParams();

    const convertedId = Number(id);
    return(
        <div className="flex flex-col gap-4 items-center justify-center">
            <div className="h-12 mt-5">
                <h1 className="text-black">Edit Employees</h1>
            </div>
            <div className="">
                <EditForm id={convertedId}/>
            </div>
        </div>
    )
}

export default EditPage;