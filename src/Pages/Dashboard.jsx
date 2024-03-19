import React, { useContext } from "react";
import NavBarComponent from "../Component/NavBarComponent";
import SideBar from "../Component/SideBar";
import { Route, Routes } from "react-router-dom";
import { Store } from "../Context/StateStore";
import DashBoardContent from "./DashBoardContent";
import TaskList from "./TaskList";
import PendingList from "./PendingList";
import CompletedTask from "./CompletedTask";
import ComOnTime from "./ComOnTime";
import ComAfterTime from "./ComAfterTime";
import OverDue from "./OverDue";
import { Spinner } from "react-bootstrap";
import TaskDetails from "./TaskDetails";

const Dashboard = () => {
    const {currentDate,user}=useContext(Store)
  return (
    <div className="poppins">
        {
           true? <>
      <NavBarComponent />
      <div className="lg:flex">
        
      <div className="d-none d-lg-flex ">
        <SideBar />
      </div>
        <div className="lg:flex-1">
            {/* Welcome User */}
            <Routes>
                <Route path="/" element={<DashBoardContent/>}/>
                <Route path="/tasklist" element={<TaskList/>}/>
                <Route path="/pendingTask" element={<PendingList/>}/>
                <Route path="/completedTask" element={<CompletedTask/>}/>
                <Route path="/completedOntime" element={<ComOnTime/>} />
                <Route path="/completedAfterTime" element={<ComAfterTime/>}/>
                <Route path="/overdue" element={<OverDue/>} /> 
                <Route path="/taskdetails/:id" element={<TaskDetails/>}/>

            </Routes>
           </div>
      
      </div></> : <div className="h-[100vh] flex ">

      <Spinner className="m-auto" animation="border" />;
      </div>
        }
    </div>
  );
};

export default Dashboard;
