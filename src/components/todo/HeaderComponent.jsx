import {Link} from 'react-router-dom'
import {  UseAuth } from './security/AuthContext'

export default function HeaderComponent(){

  
    const authContext=UseAuth()
    const isAuthenticated=authContext.isAuthenticated
    function logOut(){
        authContext.logOut()
     }
    
    return(
<header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.google.com">Todo App</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                
                                {isAuthenticated &&  <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/Mahesh">Home</Link></li>}
                                {isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>}
                                
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                        { ! isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>}
                            { isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/logout" onClick={logOut}>Logout</Link></li>}
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}