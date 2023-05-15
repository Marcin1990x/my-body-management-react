import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from './security/AuthContext'
import './LoginComponent.css'


export default function LoginComponent(){

    const navigate = useNavigate()

    const authContext = useAuth()

    const [username, setUsername] = useState('login')
    const [password, setPassword] = useState('')

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    async function handleSubmit(){
        if(await authContext.login(username, password)){
            navigate('/welcome')
        }
        else{
            setShowErrorMessage(true)
        }
    }

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    return(
        <div className="LoginComponent">

            {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}

            <div className="loginForm">
                <div>
                    <label>Username: </label>
                    <input type = "text" name = "username" value = {username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type = "password" name = "password" value = {password} onChange={handlePasswordChange}/>
                </div>
                
            </div>
            <button className="btn btn-success m-5" onClick={handleSubmit}>Login</button>
        </div>
    )
}