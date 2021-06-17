import React from "react"
import ReactDOM from "react-dom"
function handleClick(){
    return(
            console.log("i was clicked")
     
    )
}
function App(){
        return(
            <div>
                <img onMouseOver={()=>{console.log("Hovered")}}alt="cloud" src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                <button onClick={handleClick}>Click me</button>
            </div>
        )
    }


ReactDOM.render(
    <App/>,
    document.getElementById("root")
)
