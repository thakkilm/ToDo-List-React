import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { retrieveHellowWorldPathVariable } from './api/HelloWorldApiService'
import { UseAuth } from './security/AuthContext'
export default function WelcomeComponent() {
    const { userName } = useParams()
    const [message, setMessage] = useState()
    const authContect = UseAuth()
    const token = authContect.token
    function callHelloWorkdRestApi() {
        // console.log('Called')
        // retrieveHellowWorldBean().then((response) => successResponse(response)).catch((error) => errorresponse(error)).finally(() => console.log('cleanup'))
        retrieveHellowWorldPathVariable('Mahesh', token).then((response) => successResponse(response)).catch((error) => errorresponse(error)).finally(() => console.log('cleanup'))

    }

    function successResponse(response) {
        console.log(response)
        setMessage(response.data.message)
    }
    function errorresponse(error) {
        console.log(error)
    }
    return (

        <div className='welcomeComponent'>
            <h1>Welcome to My App {userName}</h1>
            <div >Manage Your todays <Link to='/todos'>Here</Link> </div>
            <div>
                <button className="btn btn-success" onClick={callHelloWorkdRestApi}>Call Hello World</button>

            </div>
            <div className='set-message'>{message}</div>
        </div>

    )
}
