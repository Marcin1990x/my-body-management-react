import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { retrieveAllEntries } from "./api/EntriesApiService"

export default function ListEntriesComponent(){

    const navigate = useNavigate()

    const [entries, setEntries] = useState()

    function refreshEntries(){

        retrieveAllEntries()
            .then( response => setEntries(response.data))
            .catch( (error) => console.log(error))
    }

    function addNewEntry(){
        navigate('/entry')
    }

    return(
        <div className="container">
            Entries Page
            <hr />
            <button className = "btn btn-success" onClick = {addNewEntry}>Add entry</button>
            <hr />
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>USERNAME</th>
                                <th>ENTRY DATE</th>
                                <th>WEIGHT</th>
                                <th>STEPS</th>
                                <th>COMMENT</th>
                                <th>DELETE</th>
                                <th>UPDATE</th>
                            </tr>
                        </thead>
                        <tbody>
                        {   
                            entries.map(
                                entry => (
                                    <tr>
                                        <td>{entry.id}</td>
                                        <td>{entry.username}</td>
                                        <td>{entry.entryDate}</td>
                                        <td>{entry.weight}</td>
                                        <td>{entry.steps}</td>
                                        <td>{entry.comment}</td>
                                        <td><button className="btn btn-danger">Delete entry</button></td>
                                        <td><button className="btn btn-warning">Edit entry</button></td>
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