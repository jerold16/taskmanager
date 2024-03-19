import React, { useContext, useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import SideBar from './SideBar'
import { Store } from '../Context/StateStore'
import { useNavigate } from 'react-router-dom'

const NavBarComponent = () => {
    let {show,setshow}=useContext(Store)
    const handleClose=()=>{
        setshow(false)
    }
    let navigate=useNavigate()
  return (
    <div className='min-h-[10vh] bg-white sticky-top border-bottom border-1 border-slate-500 flex items-center justify-between px-3'>
       <img onClick={()=>navigate('/dashboard')} src={require('../Assests/meridawebsitelogo.png')} width={160} alt="Logo" />
       <div className='flex items-center gap-2'>
        <button className='d-none d-sm-block  '>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
</svg>
        </button>
        <button onClick={()=>setshow(!show)} className='p-2 d-lg-none border-1 h-fit rounded m-0'>
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
       </button>
        <button className='rounded-full bg-black w-12 h-12 m-3 '>
            <img className='w-12 h-12 object-cover rounded-full' src={require('../Assests/profiledemo.jpeg')} alt="Profile" />
        </button>
       
       </div>
       
       <Offcanvas style={{backgroundColor:"#4c3575"}} show={show} className="" onHide={handleClose}>
       
       
        <Offcanvas.Header className='m-0' closeButton>
         <img className='m-0' width={160} src={require('../Assests/meridawebsitelogowhite.png')} alt="" />
        </Offcanvas.Header >
        <Offcanvas.Body>
          <SideBar setshow={setshow}/>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default NavBarComponent