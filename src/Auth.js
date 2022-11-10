
import {  decodeToken } from "react-jwt";


export default function Auth(){


   
        
        
        
     
    const token= localStorage.getItem('access_token');


    if (token){
        const decoded = decodeToken(token);
        return decoded;
        
    }
    else{
        return null;
    }

    
}
