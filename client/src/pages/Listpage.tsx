import { useNavigate } from "react-router-dom";
import EmployeesList from "../components/EmployeesList";

const ListPage = () =>{
    const navigate = useNavigate();
    
    return(
        <div className="flex flex-col gap-4 min-h-screen">
            <div className="h-12 mt-5 text-center">
                <h1 className="text-black text-3xl">Employees List</h1>
            </div>
            <EmployeesList />
            <div className="text-right p-4">
                <button className="bg-black hover:bg-white hover:text-black hover:border-1 text-white font-bold py-2 px-4 rounded" onClick={()=>navigate("/create")}>Create</button>
            </div>
            
          
        </div>
    )
}
export default ListPage;