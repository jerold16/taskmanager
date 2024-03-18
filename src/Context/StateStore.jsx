import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { hostName } from '../App'


export const Store=createContext(null)
const StateStore = (props) => {
    const [activepage,setactive]=useState('dashboard')
    const [show,setshow]=useState(false)
    const currentDate=(new Date()).toString().slice(0,16)
    const [allDetails,setAllDetails]=useState()
    const [user,setUser]=useState()
    useEffect(()=>{
        setactive('dashboard')
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
    //Storage to distribute
    const storeValue={allDetails,show,setshow,setUser,user,activepage,setactive,currentDate}
  return (
    <Store.Provider value={storeValue} >
        {props.children}
    </Store.Provider>
   
  )
}

export default StateStore