import React from "react";
import { useParams } from "react-router-dom";

const EditPage = () => {
    const {id} = useParams();

    console.log("id", id);
    return(
        <div className="flex flex-col gap-4">
            <div className="h-12 mt-5">
                <h1 className="text-black">Edit Employees</h1>
            </div>
            <div className="h-12">
                <p>This is a edit page</p>
            </div>
        </div>
    )
}

export default EditPage;