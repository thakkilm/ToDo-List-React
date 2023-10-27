
import { useEffect, useState } from 'react'
import { retrieveAllTodosForUsername, deleteTodoAPI } from './api/TodoAPIService'
import { UseAuth } from './security/AuthContext'
import { useNavigate } from 'react-router-dom'


export default function ListTodosComponent() {
    // const date = new Date()
    // const targetDate = new Date(date.getFullYear() + 10, date.getMonth(), date.getDay())
    // const todos = [
    //     { id: 1, username: 'Mahesh', descrition: 'Learn React', done: false, targetDate: targetDate },
    //     { id: 2, username: 'Mahesh', descrition: 'Learn React', done: false, targetDate: targetDate },
    //     { id: 3, username: 'Mahesh', descrition: 'Learn React', done: false, targetDate: targetDate }
    // ]


    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)
    const authContext = UseAuth()
    const username = authContext.username
    const navigate = useNavigate()
    useEffect(

        () => refreshTodos(), []
    )
    function refreshTodos() {
        retrieveAllTodosForUsername(username)
            .then((response) => {
                setTodos(response.data)
            }
            ).catch((error) => console.log(error))

    }
    function deleteTodo(id) {
        deleteTodoAPI(username, id).then(() => {

            setMessage(`Delete of todo with id ${id} is success`)
            refreshTodos()
        }).catch((error) => console.log(error))
    }
    function updateTodo(id) {

        navigate(`/todo/${id}`)
    }
    function addNewTodo() {
        navigate(`/todo/-1`)
    }

    return (

        <div className='container'>
            <h1>Things you want to do!</h1>
            {message && <div className='alert alert-warning'>{message}</div>}

            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className='btn btn-warning' onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className='btn btn-success' onClick={() => updateTodo(todo.id)}>Update</button></td>

                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>
                <div>

                    <button className="btn btn-success m-5" onClick={addNewTodo} type="submit">Add a new Todo</button>
                </div>
            </div>
        </div>
    )
}
