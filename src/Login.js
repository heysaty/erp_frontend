import React from 'react';
import { useNavigate } from "react-router-dom";
// import { fetchToken, setToken } from "./Auth";
import { useState } from "react";
import axios from "axios";
import Auth from './Auth';

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
    </div>
  );
}