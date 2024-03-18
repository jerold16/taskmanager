import React, { useContext, useEffect } from 'react'
import { Store } from '../Context/StateStore'
import { hostName } from '../App'
import axios from 'axios'

const DashBoardContent = () => {
    const {currentDate,user,allDetails}=useContext(Store)
    let count=allDetails.count
    let {setactive,setUser}=useContext(Store)
    useEffect(()=>{
        setactive('dashboard')
        axios.get(`${hostName}/api/EmployeeDetailsL/`).then((response)=>{
            setUser(response.data)
        })
    },[])
  return (
    <div className='poppins p-3'>
         <div className="w-fit border-1 border-slate-300 p-3 shadow rounded-xl ">
                Welcome {user!=undefined ? user.name:""}
            <p>  {currentDate}</p>

            </div>
            {/* Floating Buttons */}
            <section className="flex my-4 justify-around flex-wrap gap-2 sm:gap-4">
            <div className="flex w-[180px] rounded-xl shadow-md shadow-pink-700 bg-pink-500 h-[100px] cursor-pointer hoverup text-white">
               <p className="w-fit m-auto ">Task List</p>
            </div>
            <div className="flex w-[180px] rounded-xl shadow-md shadow-orange-700 bg-orange-500 min-h-[100px] cursor-pointer hoverup text-white">
                <p className="w-fit m-auto ">Pending Task  <span className='block p-2 rounded-full bg-red-700 w-10 h-fit mx-auto'>{count.completed_task_object} </span></p> 
            </div>
            <div className="flex w-[180px]  rounded-xl shadow-md shadow-red-700 bg-red-500 min-h-[100px] p-3 text-center cursor-pointer hoverup text-white">
                <p className="w-fit m-auto ">Completed Task <span className='block p-2 rounded-full bg-red-700 w-10 h-fit mx-auto'>{count.completed_task_object} </span></p> 
            </div>
            </section>
            <section  className="flex justify-around flex-wrap gap-2 sm:gap-4 my-4">
            <div className="flex w-[180px]  rounded-xl shadow-md shadow-yellow-700 bg-yellow-500 min-h-[100px] p-3 text-center cursor-pointer hoverup text-white">
                <p className="w-fit m-auto ">Completed Ontime  <span className='block p-2 rounded-full bg-red-700 w-10 h-fit mx-auto'>{count.completed_task_object} </span></p> 
            </div>
            <div className="flex w-[250px]  rounded-xl shadow-md shadow-blue-700 bg-blue-500 min-h-[100px] p-3 text-center cursor-pointer hoverup text-white">
                <p className="w-fit m-auto ">Completed After time  <span className='block p-2 rounded-full bg-red-700 w-10 h-fit mx-auto'>{count.completed_task_object} </span></p> 
            </div>
            <div className="flex w-[250px]  rounded-xl shadow-md shadow-lime-500 bg-lime-500 min-h-[100px] p-3 text-center cursor-pointer hoverup text-white">
                <p className="w-fit m-auto ">OverDue Task</p> 
            </div>
            </section>
            
        </div>
  )
}

export default DashBoardContent