import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            userState:false,
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
       
    //     this.setState(Previous=>{
    //         if(Previous.userState==="in"){
    //             return {
    //                 userState:"out",
    //                 buttonname:"Login"
    //             }
                 
    //         }
    //         return {
    //             userState:"in",
    //             buttonname:"Logout"
    //         }
    //     })
    //  }
    this.setState(Previous=>{
        return {
            userState:!Previous.userState
            
        }
    })
}
    render(){
        return(
            <div>
                <h1>You are currently logged {this.state.userState? "in":"out"}</h1>
                <button onClick={this.handleClick}>LOG{this.state.userState?"OUT":"IN"}</button>
                
            </div>

        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)