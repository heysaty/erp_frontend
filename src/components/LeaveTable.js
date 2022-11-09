import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Navbar from './Navbar'

function LeaveTable() {

    const [list, setList] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8000/leaves")
        .then(response => response.json())
        .then(data => setList(data))
    },[])
    console.log('feteching')
    console.log(list)



       const DisplayData=list.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.leave_status}</td>
                    <td>{info.leave_type}</td>
                    <td>{info.date}</td>
                    <td>{info.user_id}</td>

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