import React from "react";
import CreateForm from "../components/CreateForm";

const CreatePage = () => {
    return(
        <div className="flex flex-col gap-4">
            <div className="h-12 mt-5">
                <h1 className="text-black">Create Page</h1>
            </div>
            <CreateForm />
        </div>
    )
}

export default CreatePage;