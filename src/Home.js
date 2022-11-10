import React from 'react';
import Auth from './Auth';
import { useNavigate } from "react-router";
import Navbar from "./components/Navbar"
export default function Home() {
  const navigate = useNavigate();

  
  if (Auth()==null) {
    navigate('/')
    return alert('Login Required !!!')

  }
  else{
    return (
    
          <>
              <Navbar />
      
              {/* <div style={{ marginTop: 50, minHeight: 700 }}>
      
              <p>Hello there, welcome to your Home page</p> */}
      
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>
                  <h1> Hello there, Welcome to your Home page !</h1>
              </div>
          </>
        );

  }
  
}