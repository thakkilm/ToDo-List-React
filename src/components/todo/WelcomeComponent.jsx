import {useParams,Link} from 'react-router-dom'

export default function WelcomeComponent() {
    const {userName}=useParams()
    
    return (
        <>
        <div className='welcomeComponent'>
        <h1>Welcome to My App {userName}</h1>
        <div >Manage Your todays <Link to='/todos'>Here</Link> </div>
        </div>
        </>
    )
}
