import { Formik, Form, Field } from 'formik'
import { useEffect, useState } from 'react'
import { createEntryApi, retrieveEntryApi } from './api/EntriesApiService'
import { useNavigate, useParams } from 'react-router-dom'

export default function EntryComponent(){

    const navigate = useNavigate()

    const {id} = useParams()

    const [entryDate, setEntryDate] = useState('')
    const [weight, setWeight] = useState('')
    const [steps, setSteps] = useState('')
    const [comment, setComment] = useState('')

    useEffect( () => retrieveEntry(), [id])

    function retrieveEntry(){
        if(id != -1){
            retrieveEntryApi(id)
                .then( response => 
                    {
                        console.log(response)
                        setEntryDate(response.data.entryDate)
                        setWeight(response.data.weight)
                        setSteps(response.data.steps)
                        setComment(response.data.comment)
                        console.log(entryDate)
                        console.log(weight)
                        console.log(steps)
                        console.log(comment) // works
                    })
                .catch( (error) => console.log(error))    
        }

    }

    function saveEntry(values){
        const entry = {
            id: id,
            username: 'Maja',
            entryDate: values.entryDate,
            weight: values.weight,
            steps: values.steps,
            comment: values.comment
        }

        if(id == -1) {
        createEntryApi(entry)
            .then( response => {
             navigate('/entries-list')
            }
            )
            .catch( error => console.log(error))
        }
    }

    return(
        <div className="container">
            <h1>Enter details:</h1>
            <div>
                <Formik initialValues={ {entryDate, weight, steps, comment}}
                    onSubmit={saveEntry}
                    enableReinitialize={true}
                >
                    <Form>
                        <fieldset className="form-group">
                            <label>Entry Date:</label>
                            <Field type="date" className="form-control" name="entryDate" />
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Weight:</label>
                            <Field type="text" className="form-control" name="weight" />
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Steps:</label>
                            <Field type="text" className="form-control" name="steps" />
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Comment:</label>
                            <Field type="text" className="form-control" name="comment" />
                        </fieldset>
                        <div>
                            <button className="btn btn-success m-3" type="submit">Save</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}