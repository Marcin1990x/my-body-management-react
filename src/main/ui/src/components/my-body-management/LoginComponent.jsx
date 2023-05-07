import { useNavigate } from "react-router-dom"


export default function LoginComponent(){

    const navigate = useNavigate()

    function button(){
        navigate('/welcome')
    }

    return(
        <div className="LoginComponent">
            Login 
            <div>
                <button className="btn btn-success m-5" onClick={button}>Go to welcome</button>
            </div>
        </div>
    )
}