import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import './App.css';

import LeaveTable from './components/LeaveTable';
import CreateUser from "./components/CreateUser";
import Leaves from "./components/Leaves";

function App() {
  return (

    <div className ="App">
    <Routes>
        <Route path="/" element = {<Login/>}/>
        <Route  path="/home" element= {<Home/>}/>
        <Route  path="/leaves" element= {<LeaveTable/>}/>
        <Route path="/signup" element= {<CreateUser/>}/>
        <Route path="/applyleaves" element= {<Leaves/>}/>


    </Routes>
    </div>
  );
}

export default App;
