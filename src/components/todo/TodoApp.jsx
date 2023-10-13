import { useState } from 'react';
import './TodoApp.css'
export default function TodoApp() {

    return (
        <>
            <div className="TodoApp">
                Todo Application
            </div>
            <LoginComponent />
        </>
    );
}

function LoginComponent() {
    const [userName, setUserName] = useState("Mahesh")
    const [password, setPassword] = useState('')
    const [successMessage, setSuccess] = useState(false)

    const [errorMessage, setError] = useState(false)
 
   

    function handleUsernameChange(event) {
        setUserName(event.target.value)
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)
        console.log(event.target.value)
    }

    function setSuccessMessage() {
        if (userName === 'Mahesh' && password === 'dummy') {
            setSuccess(true)
            setError(false)
        }
        else {
            setSuccess(false)
            setError(true)
        }
    }

    function ShowSuccessMessageComponent() {
        if (successMessage) {
            return (
                <div className='successMessage'>Login is Successful</div>
            )
        }
        else
        return null
    }
    function ShowErrorMessage() {
        if (errorMessage) {
            return (
                <div className='errorMessage'>Login is UnSuccessful. Please check your password</div>
            )
        }
        else
            return null
    }
    return (
        <>
            <div className="loginForm">
            
                <ShowSuccessMessageComponent/>
                <ShowErrorMessage/>
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

// function showSuccessMessageComponent() {
//     if (successMessage) {
//         return (
//             <div className='successMessage'>Login is Successful</div>
//         )
//     }
//     else
//     return null
// }
// function showErrorMessage() {
//     if (errorMessage) {
//         return (
//             <div className='errorMessage'>Login is UnSuccessful. Please check your password</div>
//         )
//     }
//     else
//         return null
// }
