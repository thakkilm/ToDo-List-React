import { createContext, useContext, useState } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationAPIService";
import { apiBase } from "../api/ApiClient";


export const AuthContext = createContext();
export const UseAuth = () => useContext(AuthContext)


export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthentication] = useState(false)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)

    const val = { isAuthenticated, setAuthentication, login, logOut, username }


    // async function login(password, username) {

    //     const baToken = 'Basic ' + window.btoa(username + ':' + password)
    //     try {
    //         const response = await executeBasicAuthenticationService(baToken)


    //         if (response.status == 200) {
    //             setAuthentication(true)
    //             setToken(baToken)
    //             apiBase.interceptors.request.use(
    //                 (config) => {
    //                     config.headers.Authorization = baToken
    //                     return config
    //                 }
    //             )
    //             setUsername(username)
    //             return true
    //         }
    //         else {
    //             logOut()

    //             return false
    //         }
    //     }
    //     catch (error) {
    //         logOut()

    //         return false
    //     }
    // }
    // function logOut() {
    //     setToken(null)
    //     setAuthentication(false)
    //     setUsername(null)
    // }

    async function login(password, username) {

        try {
            const response = await executeJwtAuthenticationService(username, password)
            const token = 'Bearer ' + response.data.token

            if (response.status == 200) {
                setAuthentication(true)
                setToken(token)
                apiBase.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = token
                        return config
                    }
                )
                setUsername(username)
                return true
            }
            else {
                logOut()

                return false
            }
        }
        catch (error) {
            logOut()

            return false
        }
    }
    function logOut() {
        setToken(null)
        setAuthentication(false)
        setUsername(null)
    }

    // setInterval(()=>setNumber(number+1),10000)
    return (
        <AuthContext.Provider value={val}>
            {children}
        </AuthContext.Provider>
    )
}