import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { retrieveAllEntriesApi, deleteEntryApi, retrieveEntriesOnPageApi } from "./api/EntriesApiService";

export default function ListEntriesComponent(){

    const navigate = useNavigate()

    const [entries, setEntries] = useState([])

    const [page, setPage] = useState('0')

    // useEffect(() => refreshEntries(), []) 

    // function refreshEntries(){

    //     retrieveAllEntriesApi()
    //         .then( response => {
    //             setEntries(response.data)
    //             }
    //         )
    //         .catch( (error) => console.log(error))
    // }

    useEffect(() => refreshEntriesOnPage(), []) 

    function refreshEntriesOnPage(){

        retrieveEntriesOnPageApi(page)
            .then( response => {
                setEntries(response.data)
                }
            )
            .catch( (error) => console.log(error))
    }

    function addNewEntry(){
        navigate('/entry/-1')
    }

    function updateEntry(id){
        navigate(`/entry/${id}`)
    }

    function deleteEntry(id){

        deleteEntryApi(id)
            .then( 
                (response) => {            
                refreshEntriesOnPage(page)
                }
            )
            .catch( (error) => console.log(error))
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
                                    <tr key = {entry.id}>
                                        <td>{entry.id}</td>
                                        <td>{entry.username}</td>
                                        <td>{entry.entryDate}</td>
                                        <td>{entry.weight}</td>
                                        <td>{entry.steps}</td>
                                        <td>{entry.comment}</td>
                                        <td><button className="btn btn-danger" 
                                            onClick = { () => deleteEntry(entry.id) }>Delete entry</button></td>
                                        <td><button className="btn btn-warning"
                                            onClick ={ () => updateEntry(entry.id) }>Edit entry</button></td>
                                    </tr>
                                )
                            )
                        }    
                        </tbody>
                    </table>
                </div>
                <div>
                     <nav aria-label="Page navigation">
                        <ul class="pagination"> 
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="/entries-list/1">1</a></li>
                            <li class="page-item"><a class="page-link" href="/entries-list/2">2</a></li>
                            <li class="page-item"><a class="page-link" href="/entries-list/3">3</a></li>
                            <li class="page-item"><a class="page-link" href="/entries-list/4">4</a></li>
                            <li class="page-item"><a class="page-link" href="/entries-list/5">5</a></li>
                            <li class="page-item"><a class="page-link" href="/entries-list/6">6</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav> 
                </div>
        </div>
    )
}