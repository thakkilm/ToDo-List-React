import { createContext, useContext, useState } from "react";


export const AuthContext=createContext();
export const UseAuth=()=>useContext(AuthContext)


export default function AuthProvider({children}){
    const [number,setNumber]=useState(10)
    const [isAuthenticated,setAuthentication]=useState(false)
    const val={number,isAuthenticated,setAuthentication}
    // setInterval(()=>setNumber(number+1),10000)
     return(
        <AuthContext.Provider value={val}>
        {children}
        </AuthContext.Provider>
    )
}