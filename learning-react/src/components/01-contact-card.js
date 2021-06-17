import React from "react"
function ContactCard(props){
    return(
        <div>
        <h1>{props.contact.name}</h1>
        <email>{props.contact.email}</email>
        <p>{props.contact.number}</p>
      </div>
    )
}

export default ContactCard