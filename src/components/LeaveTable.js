import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Navbar from './Navbar'
import axios from "axios";
import Auth from '../Auth';
import { useNavigate } from "react-router";



function LeaveTable() {

    const navigate = useNavigate();

   
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
                    {/* <td>{info.id}</td> */}
                    <td>{info.date}</td>
                    <td>{info.leave_status}</td>
                    <td>{info.leave_type}</td>
                    
                    <td>{info.user_id}</td>
                    {(() => {
                    if (Auth().role==='admin'){
                        return (


                          <td>
                          {/* dont call onclick directly it calls infinite times */}
                          <button onClick={()=>{handleapprove(info.id)}} >Approve</button>
                          <button onClick={()=>{handlereject(info.id)}} >Reject</button>
                          </td>
                          
                        )
                    }
                    
                    return null;
                    })()}
                


                    
                </tr>
            )
        }
    )


    if (Auth()==null) {
      navigate('/')
      return alert('Login Required !!!')
  
    }
    else{
        return (
          <>
          <Navbar />

          <div>
              <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                {/* <th>id</th> */}
                <th>Date</th>
                <th>Leave Status</th>
                <th>Leave Type</th>
                
                <th>user id</th>
                {(() => {
                          if (Auth().role==='admin'){
                              return (
                                <th>Action</th>  
                              )
                          }
                          
                          return null;
                          })()}



            

              </tr>
            </thead>
            <tbody>
              
              {DisplayData}
              

            </tbody>
          </Table>
          </div>
          </>
        );
                        }
}

export default LeaveTable