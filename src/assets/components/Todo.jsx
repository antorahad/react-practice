export default function Todo({task, complete}){
    if(complete){
        return(
            <>
                <p>Task completed: {task}</p>
            </>
        )
    }

    return(
            <>
                <p>Task pending: {task}</p>
            </>
        )    
}