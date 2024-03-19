import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { hostName } from '../App'
import { useNavigate } from 'react-router-dom'


export const Store=createContext(null)
const StateStore = (props) => {
    const [activepage,setactive]=useState('dashboard')
    const [show,setshow]=useState(false)
    const currentDate=(new Date()).toString().slice(0,16)
    const [allDetails,setAllDetails]=useState()
    const [user,setUser]=useState()
    const [pendingSubTask,setpendingSubTask]=useState()
    const [completedTask,setCompletedtask]=useState()
    useEffect(()=>{
        async function apicall (){
        await axios.get(`${hostName}/api/EmployeeDetailsL/`).then((response)=>{
            setUser(response.data)
        }).catch((error)=>{
            console.log(error);
        })
        await axios.get(`${hostName}/api/ParticularUserTasks`).then((response)=>{
            console.log(response.data);
            setAllDetails(response.data)
        }).catch((error)=>{
            console.log(error);
        })
       }
       apicall()
    },[])
    let apiCallTaskChangesCall=(e,pid)=>{
        let bool=e.target.value=='completed'?true:false
        axios.put(`${hostName}/api/ParticularUserTasks/`,{id:pid,status:bool}).then((response)=>{
            
            window.location.reload()
        }).catch((error)=>{console.log(error);window.location.reload()})
    }
    //Storage to distribute
    const storeValue={apiCallTaskChangesCall,completedTask,setCompletedtask,allDetails,pendingSubTask,setpendingSubTask,show,setshow,setUser,user,activepage,setactive,currentDate}
  return (
    <Store.Provider value={storeValue} >
        {props.children}
    </Store.Provider>
   
  )
}

export default StateStore