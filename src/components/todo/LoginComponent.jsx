import { useState } from 'react';
import {  useNavigate } from 'react-router-dom'
import { UseAuth } from './security/AuthContext';


export default function LoginComponent() {
    const authContext=UseAuth()
    const [userName, setUserName] = useState("Mahesh")
    const [password, setPassword] = useState('')

    const [errorMessage, setError] = useState(false)
    const navigate = useNavigate();


    function handleUsernameChange(event) {
        setUserName(event.target.value)
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)

    }

    function setSuccessMessage() {
        if (authContext.login(password,userName)) {
            navigate(`/welcome/${userName}`)
            setError(false)
        }
        else {
            setError(true)
        }
    }


    return (
        <>
            <div className="loginForm">
                <h1>Time to Login</h1>
              
                {errorMessage && <div className='errorMessage'>Login is UnSuccessful. Please check your password</div>}
             
                <div>
                    <label >Username</label>
                    <input type="text" name="username" value={userName} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label >Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="button" name="login" onClick={setSuccessMessage}>Login</button>
            </div>
        </>


    )
}
