import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Navbar from './Navbar'
import axios from "axios";


function LeaveTable() {


   
    const [list, setList] = useState([]);
    var url;

    const  handleapprove =(id)=> {
    
      url= 'https://erp-saty.herokuapp.com/leaves/approve/'+ id
      axios.put(url);
      alert("Leave Approved")
      window.location.reload();
          // .then(response => this.setState({ updatedAt: response.data.updatedAt }));
      
      
  
   
      // navigate('/leaves');
      // alert("Logout Successfull")
  
    }


    const  handlereject=(id)=> {

      url= 'https://erp-saty.herokuapp.com/leaves/reject/'+ id
      axios.put(url);
      alert("Leave Rejected")
      window.location.reload();
          // .then(response => this.setState({ updatedAt: response.data.updatedAt }));


   
      // navigate('/leaves');
      // alert("Logout Successfull")
  
    }
  
  


    useEffect(() => {

        fetch("https://erp-saty.herokuapp.com/leaves")
        .then(response => response.json())
        .then(data => setList(data))
    },[])
    console.log('feteching')
    console.log(list)
       const DisplayData=list.map(
        (info)=>{
            // console.log(info)

            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.leave_status}</td>
                    <td>{info.leave_type}</td>
                    <td>{info.date}</td>
                    <td>{info.user_id}</td>
                    <td>

                       {/* dont call onclick directly it calls infinite times */}
                      <button onClick={()=>{handleapprove(info.id)}} >Approve</button>
                      <button onClick={()=>{handlereject(info.id)}} >Reject</button>
                    </td>
                </tr>
            )
        }
    )
  return (
    <>
     <Navbar />

    <div>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>Leave Status</th>
          <th>Leave Type</th>
          <th>Date</th>
          <th>user id</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        
        {DisplayData}
        

      </tbody>
    </Table>
    </div>
    </>
  )
}

export default LeaveTable