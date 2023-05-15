import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteEntryApi, retrieveEntriesOnPageApi, getPagesListApi } from "./api/EntriesApiService";

export default function ListEntriesComponent(){

    const navigate = useNavigate()

    const [entries, setEntries] = useState([])

    const [page, setPage] = useState('0')

    const [pagesList, setPagesList] = useState([])

    useEffect(() => { 
        refreshEntriesOnPage()
        getPagesList()
            }, [page])  

    function getPagesList(){

        getPagesListApi()
            .then( response => setPagesList(response.data) )
            .catch( error => console.log(error))
    }

    function refreshEntriesOnPage(){

        retrieveEntriesOnPageApi(page)
            .then( response => setEntries(response.data) )
            .catch( (error) => console.log(error))
    }

    function handlePageButton(pageNumber){

        navigate(`/entries-list/${pageNumber}`)
        setPage(pageNumber)
    }

    function addNewEntry(){

        navigate('/entry/-1')
    }

    function updateEntry(id){

        navigate(`/entry/${id}`)
    }

    function deleteEntry(id){
        
        deleteEntryApi(id)
            .then( (response) => refreshEntriesOnPage(page) )
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
                        <nav aria-label="Page navigation">
                            <ul class="pagination"> 
                                {
                                    pagesList.map(
                                        pages => (
                                            <li class="page-item"><a class="page-link" 
                                                //href={`/entries-list/${pages}`}
                                                button onClick = { () => handlePageButton(pages) }
                                                >{pages + 1} </a></li>  
                                        )
                                    )
                                }
                            </ul>
                        </nav>       
                </div>
        </div>
    )
}