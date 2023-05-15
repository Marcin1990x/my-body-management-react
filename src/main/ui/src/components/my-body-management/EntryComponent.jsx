import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useEffect, useState } from 'react'
import { checkForDuplicatesApi, createEntryApi, retrieveEntryApi, updateEntryApi } from './api/EntriesApiService'
import { useNavigate, useParams } from 'react-router-dom'

export default function EntryComponent(){

    const navigate = useNavigate()

    const {id} = useParams()

    const [entryDate, setEntryDate] = useState('')
    const [weight, setWeight] = useState('')
    const [steps, setSteps] = useState('')
    const [comment, setComment] = useState('')

    useEffect( () => retrieveEntry(), [id] )

    function retrieveEntry(){
        if(id != -1){
            retrieveEntryApi(id)
                .then( response => 
                    {
                        setEntryDate(response.data.entryDate)
                        setWeight(response.data.weight)
                        setSteps(response.data.steps)
                        setComment(response.data.comment)
                    })
                .catch( (error) => console.log(error))    
        }
    }

    function checkForDuplicates(values){

        checkForDuplicatesApi(values.entryDate)
        .then( response => console.log(response.data)) // inform user about duplicate
        .catch( error => console.log(error) )
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
             navigate('/entries-list/0')
                }
            )
            .catch( error => console.log(error))
        }
        else {

            updateEntryApi(entry, id)
                .then(response => {
                    console.log(response)
                    navigate('/entries-list')
                    }
                )
                .catch(error => console.log(error))
        }
    }
    
    function validate(values){

        let errors = {}
        if(values.entryDate == null || values.entryDate == ''){
            errors.entryDate = 'Please enter the correct entry date.'
        }
        if(values.weight < 30 || values.weight > 150){
            errors.weight = 'Please enter the correct weight.'
        }
        if(values.steps < 1 || values.steps > 90000){
            errors.steps = 'Please enter the correct number of steps.'
        }
        return errors
    }

    return(
        <div className="container">
            <h1>Enter details:</h1>
            <div>
                <Formik initialValues={ {entryDate, weight, steps, comment}}
                    onSubmit = {saveEntry}
                    enableReinitialize = {true}
                    validate = {validate}
                    validateOnBlur = {false}
                    validateOnChange = {false}
                >
                    <Form>
                        <ErrorMessage 
                            name = "entryDate"
                            component = "div"
                            className = "alert alert-warning"
                            />
                        <ErrorMessage 
                            name = "weight"
                            component = "div"
                            className = "alert alert-warning"
                            />
                        <ErrorMessage 
                            name = "steps"
                            component = "div"
                            className = "alert alert-warning"
                            />        
                        <fieldset className="form-group">
                            <label>Entry Date:</label>
                            <Field type="date"
                            className="form-control" name="entryDate" />
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Weight:</label>
                            <Field type="number" className="form-control" name="weight" />
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Steps:</label>
                            <Field type="number" className="form-control" name="steps" />
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