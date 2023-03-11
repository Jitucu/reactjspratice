import React from 'react'

const Course = (props) => {
 if(props.details.courseAvail === false){
    return(
        <>
    <h1>{props.details.courseName}</h1>
    <h1>{props.details.courseDuration}</h1>
    <button style={{color: "green"}}>Available</button>
    </>
    )
 }
 else{
    return(
        <>
    <h1>{props.details.courseName}</h1>
    <h1>{props.details.courseDuration}</h1>
    <button style={{color: "red"}}>Available</button>
    </>
    )
 }
}

export default Course