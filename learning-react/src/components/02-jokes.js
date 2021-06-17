import React from "react"

function Jokes(props){
    return(
        <div>
        <h1 style={{display:!props.fun.question && "none"}}>{props.fun.question}</h1>
        <p style={{color: !props.fun.question && "blue"}}>{props.fun.punchline}</p>
        <hr></hr>
        </div>
        
        

    )
}

export default Jokes