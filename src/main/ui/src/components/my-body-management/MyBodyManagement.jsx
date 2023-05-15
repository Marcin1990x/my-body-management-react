import './MyBodyManagement.css'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import WelcomePageComponent from "./WelcomePageComponent";
import LoginComponent from "./LoginComponent";
import LogoutComponent from './LogoutComponent';
import ListEntriesComponent from "./ListEntriesComponent";
import EntryComponent from "./EntryComponent";
import ErrorComponent from './ErrorComponent';
import AuthProvider, { useAuth } from './security/AuthContext';

function AuthenticatedRoute({children}){

    const authContext = useAuth()
    if(authContext.isAuthenticated){
        return children
    }
    return <Navigate to = "/login" />

}

export default function MyBodyManagement(){
    return(
        <div className="MyBodyManagement">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                        <Routes>
                            <Route path = '/' element = { <LoginComponent /> } />
                            <Route path = '/login' element = { <LoginComponent /> } />
                            <Route path = '/welcome' element = { 
                                <AuthenticatedRoute>
                                    <WelcomePageComponent />
                                </AuthenticatedRoute> }
                            />
                            <Route path = '/entries-list/:page' element = { 
                                <AuthenticatedRoute>
                                    <ListEntriesComponent /> 
                                </AuthenticatedRoute> } 
                            />
                            <Route path = '/entry/:id' element = { 
                                <AuthenticatedRoute>
                                    <EntryComponent /> 
                                </AuthenticatedRoute>} 
                            />  
                            <Route path = '/logout' element = { 
                                <AuthenticatedRoute>
                                    <LogoutComponent />
                                </AuthenticatedRoute> } 
                            />
                            <Route path = '*' element = { <ErrorComponent />} />
                        </Routes>                      
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}