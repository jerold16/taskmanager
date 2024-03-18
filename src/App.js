import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import StateStore, { Store } from './Context/StateStore';
import Login from './Pages/Login';
import Registration from './Pages/Registeration';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pages/page.css'
import Dashboard from './Pages/Dashboard';
import TaskList from './Pages/TaskList';


export const hostName='http://192.168.0.106:8000'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/registeration' element={<Registration/>}/>
      <Route path='/dashboard/*' element={<Dashboard/>}/>
      <Route path='/test' element={<TaskList/>}/>

    </Routes>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
