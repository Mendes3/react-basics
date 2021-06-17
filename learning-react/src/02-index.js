import React from "react"
import ReactDOM from "react-dom"

import Jokes from './components/02-jokes.js'

function Display(){
    return(
        <div>
            <Jokes
            fun={{
                punchline:"Its hard to explain pune to kleptomechanics because they always take things literally"
            }}/>
            <Jokes
            fun={{
                question: "What is the best thing about switzerland?",
                punchline:"i dont know, but the flag is a big plus!"
            }}
            />
            <Jokes
            fun={{
                question: "Did you hear about the mathematician who is afraid of negative numbers?",
                punchline:"He'll stop at nothing to avoid them"
            }}
            />

        </div>
    )
}

ReactDOM.render(
    <Display/>,
    document.getElementById("root")
)