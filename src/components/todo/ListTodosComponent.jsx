


export default function ListTodosComponent(){
    const date=new Date()
    const targetDate=new Date(date.getFullYear()+10,date.getMonth(),date.getDay())
    const todos=[
        {id:1, descrition:'Learn React', done:false, targetDate:targetDate},
        {id:2, descrition:'Learn React', done:false, targetDate:targetDate},
        {id:3, descrition:'Learn React', done:false, targetDate:targetDate}
    ]
    
    return (

        <div className='container'>
            <h1>Things you want to do!</h1>
            <div>
                <table className='table'>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>description</td>
                        <td>Is Done?</td>
                        <td>Target Date</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo=>(
                            <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.descrition}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toDateString()}</td>

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
