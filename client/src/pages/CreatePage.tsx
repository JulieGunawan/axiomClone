import React from "react";
import CreateForm from "../components/CreateForm";

const CreatePage = () => {
    return(
        <div className="w-full flex flex-col items-center min-h-screen">
            <div className="h-12 mt-5 items-center">
                <h1 className="text-black text-3xl">Create Page</h1>
            </div>
            <CreateForm />
        </div>
    )
}

export default CreatePage;