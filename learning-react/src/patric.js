import React from "react"
import ReactDOM from "react-dom"

import NavBar from "./patric-components/NavBar"
import MainComponent from "./patric-components/MainComponent"

console.log("hello world")

function App(){
  return(
    <div>
      <NavBar/>
      <MainComponent/>
      
    </div>
  )
}
ReactDOM.render(
  <App/>,
  document.getElementById("root")
)