import React from "react"
import ReactDOM from "react-dom"


class Form extends React.Component{
    constructor(){
        super()
        this.state={
            firstname:"",
            lastname:""
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        const {name,value}=event.target
        this.setState({
           [ name]:value
        })
        

    }
    render(){
        return(
            <form>
                <input type="text" value={this.state.firstname} name="firstname"  placeholder="Firstname" onChange={this.handleChange}/>
                <br/>
                <input type="text" value={this.state.lastname} name="lastname" placeholder="Lastname" onChange={this.handleChange}/>

                <h1>{this.state.firstname} {this.state.lastname}</h1>
            </form>
        )
    }
}
ReactDOM.render(
    <Form/>,
    document.getElementById("root")
)