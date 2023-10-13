import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate ,useParams,Link} from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
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

function WelcomeComponent() {
    const {userName}=useParams()
    
    return (
        <>
        <div className='welcomeComponent'>
        <h1>Welcome to My App {userName}</h1>
        <div >Manage Your todays <Link to='/todos'>Here</Link> </div>
        </div>
        </>
    )
}

function ErrorComponent() {
    return (
        <>
            <h1>We are working hard</h1>
            <div>Apologies for the 404. Please check the url entered</div>
        </>

    )
}
function ListTodosComponent(){
    const date=new Date()
    const targetDate=new Date(date.getFullYear()+10,date.getMonth(),date.getDay())
    const todos=[
        {id:1, descrition:'Learn React', done:false, targetDate:targetDate},
        {id:2, descrition:'Learn React', done:false, targetDate:targetDate},
        {id:3, descrition:'Learn React', done:false, targetDate:targetDate}
    ]
    
    return (

        <div className='container'>
            <h1>Things you want to do!</h1>
            <div>
                <table className='table'>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>description</td>
                        <td>Is Done?</td>
                        <td>Target Date</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo=>(
                            <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.descrition}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toDateString()}</td>

                        </tr>
                        )
                        )
                    }
                  
                </tbody>
                </table>
            </div>
        </div>
    )
}




