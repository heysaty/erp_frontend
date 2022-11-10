import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'


export default function Leaves(){
    const navigate = useNavigate();
    const [leave_date, setleave_date] = useState("");
    const [leave_type, setleave_type] = useState("");
  


const leaves = () => {
    if ((leave_date === "") & (leave_type === "")) {
        console.log("no credentials")
        return ;
      } else {
        axios
            .post("https://erp-saty.herokuapp.com/leaves",{
                leave_date:leave_date,
                leave_type:leave_type,
            })
            .then(function(response) {
                console.log(response.data)
                navigate('/home')
                alert("Leave Applied !")

            })
            .catch(function(error) {
                console.log(error,"error")
            });
        }
    };

    return (
        <>
        <Navbar />
        <div style={{ minHeight: 800, marginTop: 30 }}>
        <h1>Request Leave</h1>
        <div style={{ marginTop: 30 }}>
          
            <div>
              <form>
                <label style={{ marginRight: 45 }}>Leave Date</label>
               
  
                <input
                  type="text"
                  onChange={(e) => setleave_date(e.target.value)}
                  placeholder="YYYY-MM-DD"
                  required
                />
                 <div>
                </div>
  
  
                <label style={{ marginRight: 45 }}>Leave Type</label>
                <input
                  type="text"
                  onChange={(e) => setleave_type(e.target.value)}
                  placeholder=""
                  required
                />
                 <div>
                </div>
  
  
            
               
  
                <button type="button" onClick={leaves}>
                  Submit
                </button>
              </form>
            </div>
          
        </div>
      </div>
      </>
  
      )


}
