import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
export default function TodoApp() {

    return (
        <>
            <div className="TodoApp">
                <BrowserRouter>
                <HeaderComponent/>

                    <Routes>
                        <Route path='/' element={<LoginComponent />}/>
                        <Route path='/login' element={<LoginComponent />}/>

                        <Route path='/welcome/:userName' element={<WelcomeComponent />}/>
                        <Route path='/todos' element={<ListTodosComponent/>}/>
                        <Route path='/logout' element={<LogoutComponent/>}/>
                        <Route path="*" element={<ErrorComponent />}/>
                    </Routes>
                    <FooterComponent/>

                </BrowserRouter>
            </div>


        </>
    );
}

function LoginComponent() {
    const [userName, setUserName] = useState("Mahesh")
    const [password, setPassword] = useState('')
    const [successMessage, setSuccess] = useState(false)

    const [errorMessage, setError] = useState(false)
    const navigate = useNavigate();


    function handleUsernameChange(event) {
        setUserName(event.target.value)
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)

    }

    function setSuccessMessage() {
        if (userName === 'Mahesh' && password === 'dummy') {
            setSuccess(true)
            setError(false)
            navigate(`/welcome/${userName}`)
        }
        else {
            setSuccess(false)
            setError(true)
        }
    }


    return (
        <>
            <div className="loginForm">
                <h1>Time to Login</h1>
                {successMessage && <div className='successMessage'>Login is Successful</div>}
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






