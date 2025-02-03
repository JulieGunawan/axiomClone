import EmployeesList from "../components/EmployeesList";

const ListPage = () =>{
    return(
        <div className="flex flex-col gap-4">
            <div className="h-12 mt-5">
                <h1 className="text-black">List Page</h1>
            </div>
            <EmployeesList />
        </div>
    )
}
export default ListPage;