
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import AuthProvider, { UseAuth } from './security/AuthContext';
import TodoComponent from './TodoComponent';


export default function TodoApp() {
    function AuthenticatedRoute({ children }) {
        const authContext = UseAuth()

        if (authContext.isAuthenticated) {
            return children
        }
        return <Navigate to="/" />
    }
    return (
        <>
            <div className="TodoApp">
                <BrowserRouter>
                    <AuthProvider>
                        <HeaderComponent />

                        <Routes>
                            <Route path='/' element={<LoginComponent />} />
                            <Route path='/login' element={<LoginComponent />} />

                            <Route path='/welcome/:userName' element={

                                <AuthenticatedRoute>
                                    <WelcomeComponent />
                                </AuthenticatedRoute>

                            } />

                            <Route path='/todos' element={
                                <AuthenticatedRoute>
                                    <ListTodosComponent />
                                </AuthenticatedRoute>} />
                            <Route path='/todo/:id' element={
                                <AuthenticatedRoute>
                                    <TodoComponent />
                                </AuthenticatedRoute>} />
                            <Route path='/logout' element={
                                <AuthenticatedRoute>
                                    <LogoutComponent />
                                </AuthenticatedRoute>} />


                            <Route path="*" element={<ErrorComponent />} />
                        </Routes>
                        <FooterComponent />
                    </AuthProvider>
                </BrowserRouter>
            </div>


        </>
    );
}





