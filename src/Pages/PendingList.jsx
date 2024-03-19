import React, { useContext, useEffect } from 'react'
import { Store } from '../Context/StateStore';
import axios from 'axios';
import { hostName } from '../App';
import Loading from '../Component/Loading';
import TableRow from '../Component/TableRow';

const PendingList = () => {
    let { setactive,apiCallTaskChangesCall ,pendingSubTask,setpendingSubTask} = useContext(Store);
    useEffect(() => {
      setactive("pending");
      axios.get(`${hostName}/api/PendingSubTasks`).then((response)=>{
         setpendingSubTask(response.data)
      }).catch((error)=>{console.log(error);})
    }, []);
    return (
      <div className="poppins p-3">
        <h3>Pending Task List </h3>
       
        <div className="my-2 table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="p-2">
                 <p className="px-2 min-w-32 sm:w-full"> SI.No</p>
                  </th>
                <th><p className="px-2 min-w-32 sm:w-full"> TaskList</p></th>
                <th><p className="px-2 min-w-32 sm:w-full">Priority</p></th>
                <th><p className="px-2 min-w-32 sm:w-full">Created Date </p></th>
                <th><p className="px-2 min-w-32 sm:w-full">Assigned by</p></th>
                <th><p className="px-2 min-w-32 sm:w-full">Task Status</p></th>
              </tr>
            </thead>
            <tbody>
            <TableRow obj={pendingSubTask}/>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
       
       
      </div>
  )
}

export default PendingList