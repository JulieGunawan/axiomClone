const CreateForm = () =>{
    return(
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 py-6 mb-4">
                <div className="mb-4 flex flex-col justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">First Name </label>
                    <input type="text"/> 
                </div>
              
                <button>Create Employee</button>
            </form>
        </div>
    )
}

export default CreateForm