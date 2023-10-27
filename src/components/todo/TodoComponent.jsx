import { useNavigate, useParams } from "react-router-dom";
import { retrieveTodoAPI, updateTodoAPI, createTodoAPI } from "./api/TodoAPIService";
import { UseAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

export default function TodoComponent() {
    const authContext = UseAuth()
    const username = authContext.username
    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')
    const navigate = useNavigate()

    const { id } = useParams()
    useEffect(
        () =>
            retrieveTodo(), [id]

    )
    function retrieveTodo() {
        // retrieveTodoAPI
        if (id != -1) {
            retrieveTodoAPI(username, id)
                .then((response) => {
                    setDescription(response.data.description)
                    setTargetDate(response.data.targetDate)
                }
                ).catch((error) => console.log(error))
        }
    }
    function onSubmit(values) {
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }
        console.log(`id is ${id}`)
        if (id != -1) {
            updateTodoAPI(username, id, todo)
                .then((response) => {
                    console.log(response)
                    navigate('/todos')
                }
                ).catch((error) => console.log(error))

        }
        else {
            createTodoAPI(username, todo)
                .then((response) => {
                    console.log(response)
                    navigate('/todos')
                }
                ).catch((error) => console.log(error))

        }
    }
    function validate(values) {
        let errors = {}
        if (values.description.length < 5)
            errors.description = "Enter a valid Description"
        if (values.targetDate === null || values.targetDate === '')
            errors.targetDate = "Enter a valid TargetDate"

        console.log(values)
        return errors
    }
    return (
        <div className="container">
            <h1>Update Your Todo</h1>

            <div>Description {description}</div>
            <div>
                <Formik initialValues={{ description, targetDate }} enableReinitialize={true} onSubmit={onSubmit} validate={validate} validateOnChange={false} validateOnBlur={false}>

                    {
                        (props) => (

                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />

                                <fieldset className="form-group">

                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description" />
                                </fieldset>
                                <fieldset className="form-group">

                                    <label>Target Date</label>
                                    <Field type="date" className="form-control" name="targetDate" />
                                </fieldset>
                                <div>

                                    <button className="btn btn-success m-5" type="submit">Save</button>
                                </div>


                            </Form>

                        )
                    }



                </Formik>



            </div>
        </div>

    );
}