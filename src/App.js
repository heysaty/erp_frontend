
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import './App.css';

import LeaveTable from './components/LeaveTable';
import CreateUser from "./components/CreateUser";

function App() {
  return (

    <div className ="App">
    <Routes>
        <Route path="/" element = {<Login/>}/>
        <Route  path="/home" element= {<Home/>}/>
        <Route  path="/leaves" element= {<LeaveTable/>}/>
        <Route path="/signup" element= {<CreateUser/>}/>

    </Routes>
    </div>
  );
}

export default App;
