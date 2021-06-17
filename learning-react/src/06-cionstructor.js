import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component{
    constructor(){
        super()
        this.state={isloggedin:true}
    }
    render(){
        let useris
        if(this.state.isloggedin){
            useris = "in"

        }
        else{
             useris = "out"
        }
    
        return(
            <div>
            The user is logged {useris}.
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)
