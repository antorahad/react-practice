export default function Abouttoday ({que, ans}) {
    return(
        <>
            <div>
                <p>Question: {que}</p>
                <p>Answer: {ans ? 'Correct' : 'Wrong'}</p>
            </div>
        </>
    )
}