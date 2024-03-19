import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { hostName } from '../App';
import Loading from '../Component/Loading';
import StateStore, { Store } from '../Context/StateStore';
import TableRow from '../Component/TableRow';

const TaskDetails = () => {
    const {id}=useParams()
    let statusDropdown=['pending','completed']
    let {setactive,apiCallTaskChangesCall}=useContext(Store)
    let navigate=useNavigate()
    let [projectDetails,setdetails]=useState()
    console.log(id);
    useEffect(()=>{
        setactive('task')
        axios.get(`${hostName}/api/SubTaskList/${id}/`).then((response)=>{
            console.log(response.data);
            setdetails(response.data)
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    
  return (
    <div className="poppins p-3">
    {
      projectDetails!=undefined ? <>
      
      
    <h3>Sub Task Management</h3>
   
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
            <TableRow obj={projectDetails}/>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
   
    </>:<Loading/>
    }
  </div>
  )
}

export default TaskDetails