import React, { useContext, useEffect } from "react";
import { Store } from "../Context/StateStore";
import Loading from "../Component/Loading";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  let { setactive ,allDetails} = useContext(Store);
  console.log(allDetails);
  
  let navigate=useNavigate()
  useEffect(() => {
    setactive("task");
  }, []);
  return (
    <div className="poppins p-3">
      {
        allDetails!=undefined ? <>
        
        
      <h3>Task Management</h3>
     
      <div className="my-2 table-responsive">
        <table className="w-full">
          <thead>
            <tr>
              <th><p className="px-2 min-w-32 sm:w-full"> SI.No</p></th>
              <th><p className="px-2 min-w-32 sm:w-full"> Task Name</p></th>
              <th><p className="px-2 min-w-32 sm:w-full">Assigned Date </p></th>
              <th><p className="px-2 min-w-32 sm:w-full">Assigned by</p></th>
              <th><p className="px-2 min-w-32 sm:w-full">Due date</p></th>

              <th><p className="px-2 min-w-32 sm:w-full">Task Status</p></th>
            </tr>
          </thead>
          <tbody>
            {
              allDetails.all_tasks!=undefined? 
              allDetails.all_tasks.map((x,index)=>{
                return(
                  <tr className={`${index%2==0? "bg-slate-50":"bg-slate-100"} h-[50px] `} >
                  <td>{index+1} </td>
                  <td onClick={()=>{navigate(`/dashboard/taskdetails/${x.task_name.pk}`);alert('hellow')}} 
                  className="cursor-pointer w-fit hover:bg-slate-200">{x.task_name.task_name} </td>
                  <td className="">{x.task_name.created_date.slice(0,10)} </td>
                  <td>{x.task_name.created_by}</td>
                  <td>{x.task_name.due_date.slice(0,10)}</td>
                  <td>{x.task_name.status} </td>
                  {/* Add more data cells as needed */}
                </tr>
                )

              }) : <Loading/>
            }
           
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
     
      </>:<Loading/>
      }
    </div>
  );
};

export default TaskList;
