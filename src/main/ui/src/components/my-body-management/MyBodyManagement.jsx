import './MyBodyManagement.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import WelcomePageComponent from "./WelcomePageComponent";
import LoginComponent from "./LoginComponent";
import ListEntriesComponent from "./ListEntriesComponent";
import EntryComponent from "./EntryComponent";
import ErrorComponent from './ErrorComponent';


export default function MyBodyManagement(){
    return(
        <div className="MyBodyManagement">
            <BrowserRouter>
                <HeaderComponent />
                    <Routes>
                        <Route path = '/' element = { <LoginComponent /> } />
                        <Route path = '/login' element = { <LoginComponent /> } />
                        <Route path = '/welcome' element = { <WelcomePageComponent /> } />
                        <Route path = '/entries-list/:page' element = { <ListEntriesComponent /> } />
                        <Route path = '/entry/:id' element = { <EntryComponent /> } />  
                        <Route path = '*' element = { <ErrorComponent />} />
                    </Routes>                      
            </BrowserRouter>
        </div>
    )
}