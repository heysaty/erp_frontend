import React from 'react';
import { useNavigate } from "react-router-dom";
// import { fetchToken, setToken } from "./Auth";
import { useState } from "react";
import axios from "axios";
import Auth from './Auth';
import NavbarLogin from "./components/NavbarLogin"
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBIcon
// }
// from 'mdb-react-ui-kit';


export default function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");


  //check to see if the fields are not empty
  const login = () => {
    if ((email === "") & (password === "")) {
      console.log("no credentials")
      return ;
    } else {


      
      // make api call to our backend. we'll leave thisfor later
      axios
        .post("https://erp-saty.herokuapp.com/login", {
          email: email,
          password: password,
        })
        .then(function (response) {
          // console.log(response.data.token, "response.data.token");
          // console.log(response.data);
          const token = response.data.access_token
          if (token) {
            localStorage.setItem('access_token',token)
            console.log(Auth());

            // setToken(response.data.access_token);
//            navigate("/profile");
            navigate("home");
            alert("Successfully Logged In")
          }
        })
        .catch(function (error) {
          console.log(error, "error");
        });
    }
  };

  return (
    <>
     <NavbarLogin />
    <div style={{ minHeight: 800, marginTop: 30 }}>
      <h1>Login page</h1>
      <div style={{ marginTop: 30 }}>
        
          <div>
            <form>
              <label style={{ marginRight: 45 }}>Email</label>
              <input
                type="email"
                onChange={(e) => setemail(e.target.value)}
                required
              />
                <div>
              </div>

              <label style={{ marginRight: 10 }}>Password  </label>

              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
               <div>
              </div>

              <button type="button" onClick={login}>
                Login
              </button>
            </form>
          </div>
        
      </div>
    </div></>








    // <MDBContainer fluid>

    //   <MDBRow className='d-flex justify-content-center align-items-center h-100'>
    //     <MDBCol col='12'>

    //       <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
    //         <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

    //           <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
    //           <p className="text-white-50 mb-5">Please enter your login and password!</p>

    //           <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
    //           <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>

    //           <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
    //           <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
    //             Login
    //           </MDBBtn>

    //           <div className='d-flex flex-row mt-3 mb-5'>
    //             <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
    //               <MDBIcon fab icon='facebook-f' size="lg"/>
    //             </MDBBtn>

    //             <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
    //               <MDBIcon fab icon='twitter' size="lg"/>
    //             </MDBBtn>

    //             <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
    //               <MDBIcon fab icon='google' size="lg"/>
    //             </MDBBtn>
    //           </div>

    //           <div>
    //             <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

    //           </div>
    //         </MDBCardBody>
    //       </MDBCard>

    //     </MDBCol>
    //   </MDBRow>

    // </MDBContainer>
  );
}