import React from 'react'
import { useNavigate } from "react-router-dom";
import Auth from '../Auth';
import { useState } from "react";
import axios from "axios";
import Navbar from './Navbar'


export default function CreateUser() {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [role, setrole] = useState("");


  const user = () => {
    if ((email === "") & (password === "") & (first_name === "") & (last_name === "") & (role === "")){
      console.log("no credentials")
      return ;
    } else {
      axios
        .post('https://erp-saty.herokuapp.com/signup', {
          email:email,
          password:password,
          first_name:first_name,
          last_name:last_name,
          role:role,
        })
        .then(function(response) {
          console.log(response.data)
          navigate('/home')
          alert("Signup Successfull")
        })
        .catch(function (error) {
          console.log(error,"error")
        });
      }
    };



    if (Auth()==null) {
      navigate('/')
      return alert('Login Required !!!')
  
    }
    else{


          return (

        
            <>
            <Navbar />
            <div style={{ minHeight: 800, marginTop: 30 }}>
            <h1>Create Account</h1>
            <div style={{ marginTop: 30 }}>
              
                <div>
                  <form>
                    <label style={{ marginRight: 45 }}>First Name</label>
                  

                    <input
                      type="text"
                      onChange={(e) => setfirst_name(e.target.value)}
                      required
                    />
                    <div>
                    </div>


                    <label style={{ marginRight: 45 }}>Last Name</label>
                    <input
                      type="text"
                      onChange={(e) => setlast_name(e.target.value)}
                      required
                    />
                    <div>
                    </div>


                    <label style={{ marginRight: 93 }}>Role</label>
                    <input
                      type="text"
                      onChange={(e) => setrole(e.target.value)}
                      required
                    />
                    <div>
                    </div>


                    <label style={{ marginRight: 91 }}>Email</label>

                    <input
                      type="email"
                      onChange={(e) => setemail(e.target.value)}
                      required
                    />
                      <div>
                    </div>

                    <label style={{ marginRight: 55 }}>Password</label>


              
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div>
                    </div>

                    <button type="button" onClick={user}>
                      Signup
                    </button>
                  </form>
                </div>
              
            </div>
          </div>
          </>

          );
          }

}

