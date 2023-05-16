import { useNavigate } from "react-router";
import { retrieveMonthlySummaryApi } from "./api/WelcomeApiService";
import { useEffect, useState } from "react";

export default function WelcomePageComponent(){

    const navigate = useNavigate()

    const [summary, setSummary] = useState([])

    useEffect( () => monthlySummary() )

    function handleSubmit(){
        navigate(`/entries-list/0`)
    }

    function monthlySummary(){

        retrieveMonthlySummaryApi
            .then( 
                response =>
                    { 
                        setSummary(response.data) 
                    }
                )
            .catch( error => console.log(error) )

    }

    return(
        <div className="WelcomePageComponent">
            <div>
                <h2>Welcome Maja!</h2>
            </div>
            <div>
                <button className="btn btn-success m-3" onClick={handleSubmit}>Show daily entries</button>
            </div>
            <div className="container w-50">
                <div>
                    { 
                        summary.map(
                            monthly => (
                            <ul className="list-group" key={monthly.month}>
                                <li className="list-group-item list-group-item-success">{monthly.month}</li>
                                <li className="list-group-item">Your monthly weight progress: {monthly.startWeight} → {monthly.endWeight}</li>
                                <li className="list-group-item">Total monthly steps: {monthly.totalSteps}</li>
                                <li className="list-group-item">Total active days: {monthly.activeDaysCount}</li>
                                <li className="list-group-item">Total regeneration days: {monthly.regenerationDaysCount}</li>
                            </ul>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}