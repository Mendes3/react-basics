import React, {Component} from "react"
import ReactDOM from "react-dom"

class App extends React.Component{
    render(){
        return(
            <div>
                <Header name="Manita" doing="learning react"/>
                <Greeting/>
            </div>
        )
    }
}
class Header extends React.Component{
    render(props){
        return(
            <h1>Welcome, {this.props.name}</h1>


        )
    }
}
class Greeting extends React.Component{
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeoftheday
        if(hours<12){
            timeoftheday = "morning"}
        else if(hours>12 && hours<17){
            timeoftheday="afternoon"
        }
        else{
            timeoftheday="evening"
        }
        return(
            <div>
                <h1>Good {timeoftheday} to you, sir or madam</h1>
            </div>
        )
    }
    
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)