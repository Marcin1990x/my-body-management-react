import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiSerivce";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}) {

const [isAuthenticated, setAuthenticated] = useState(false)

const [token, setToken] = useState(null)

    // function login(username, password){  // simple auth

    //     if(username === 'Maja' && password === 'maja'){
    //         setAuthenticated(true)
    //         return true
    //     } else {
    //         setAuthenticated(false)
    //         return false
    //     }
    // }

    // jwt auth

    async function login(username, password) {

        
        try {

            const response = await executeJwtAuthenticationService(username, password)

            if(response.status == 200) {

                const jwtToken = 'Bearer' + response.data.token

                setAuthenticated(true)
                setToken(jwtToken)

                apiClient.interceptors.request.use (
                    (config) => {
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )
                return true
            } else {
                logout()
                return false
            }
        

        } catch (error) {
            logout()
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, token}}>
            {children}
        </AuthContext.Provider>
    )
}