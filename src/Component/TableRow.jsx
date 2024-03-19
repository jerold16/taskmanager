import React, { useContext } from 'react'
import Loading from './Loading'
import { Store } from '../Context/StateStore'

const TableRow = (props) => {
    const {obj}=props
    const {apiCallTaskChangesCall}=useContext(Store)
  return (
    <>
      {
            obj!=undefined? 
            obj.map((x,index)=>{
              return(
                <tr className={`${index%2==0? "bg-slate-50":"bg-slate-100"} h-[50px] `} >
                <td>{index+1} </td>
                <td className="">{x.task_name} </td>
                <td className="">{x.created_date.slice(0,10)} </td>
                <td>{x.created_by.name}</td>
                <td>{x.due_date.slice(0,10)}</td>
                <td> 
                    <select onChange={(e)=>apiCallTaskChangesCall(e,x.id)} name="" className='outline-none bg-transparent' id="">
                    <option value={x.status.slice(0,3)=='com'?"completed":"pending"}>{x.status.slice(0,3)=='com'?"completed":"pending"} </option>
                    <option value={x.status=='pending'?"completed":"pending"}>{x.status=='pending'?"completed":"pending"} </option>
                </select>
                 </td>
                {/* Add more data cells as needed */}
              </tr>
              )

            }) : <Loading/>
          }  
    </>
  )
}

export default TableRow