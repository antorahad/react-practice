export default function Employee({name, age, designation, contact}){
    
    return(
        <>
            <div className="employee-card">
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Designation: {designation}</p>
                <p>Contact: {contact}</p>
            </div>
        </>
    )
}