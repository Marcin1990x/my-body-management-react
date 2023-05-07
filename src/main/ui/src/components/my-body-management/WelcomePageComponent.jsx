import { useNavigate } from "react-router"

export default function WelcomePageComponent(){

    const navigate = useNavigate()

    function handleSubmit(){
        navigate(`/entries-list`)
    }

    return(
        <div className="WelcomePageComponent">
            <div>Welcome Maja!</div>
            <div>
                <button className="btn btn-success" onClick={handleSubmit}>Show daily entries</button>
            </div>
        </div>
    )
}