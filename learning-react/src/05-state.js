// props are imutable but states are mutuable
// to implement the concept of states, we need class based components
import React from "react"
import ReactDOM from "react-dom"
class App extends React.Component{
    constructor(){
        super()
        this.state ={name:"Manita",age:"21"}
         
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age} years old.</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)

