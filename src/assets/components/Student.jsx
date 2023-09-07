export default function Student (props) {
    return(
        <>
            <div className="student-card">
                <p>Name: {props.name}</p>
                <p>Roll: {props.roll}</p>
                <p>Class: {props.studentclass}</p>
                <p>Section: {props.section}</p>
                <p>Blood Group: {props.blood}</p>
            </div>
        </>
    )
}