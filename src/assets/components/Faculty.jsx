export default function Faculty({name, id, faculty, designation}){
    return(
        <>
            <div className="employee-card">
                <p>Name: {name}</p>
                <p>ID: {id}</p>
                <p>Faculty: {faculty}</p>
                <p>Designation: {designation}</p>
            </div>
        </>
    )
}