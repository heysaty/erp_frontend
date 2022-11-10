import React from 'react'
import {  decodeToken } from "react-jwt";


export default function Auth(){



    const token= localStorage.getItem('access_token');

    const decoded = decodeToken(token)


  return decoded;
}
