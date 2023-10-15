import { createContext, useContext, useState } from "react";


export const AuthContext=createContext();
export const UseAuth=()=>useContext(AuthContext)


export default function AuthProvider({children}){
    const [isAuthenticated,setAuthentication]=useState(false)
    const val={isAuthenticated,setAuthentication,login,logOut}

    function login(password,username){
        if (username === 'Mahesh' && password === 'dummy') {
           setAuthentication(true)
           return true
        }
        else {
           setAuthentication(false)
           return false
        }
    }
    function logOut(){
        setAuthentication(false)
     }
   
    // setInterval(()=>setNumber(number+1),10000)
     return(
        <AuthContext.Provider value={val}>
        {children}
        </AuthContext.Provider>
    )
}