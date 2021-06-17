import React from "react"

import Item from "./components/03-items.js"
import contact from "./03-contact.js"

function ToDo(){
    const contactItems = contact.map(item=>
        <Item key={item.id} text={item.text}/>)
    return(
        <div>
            {contactItems}
        </div>
    )
}


export default ToDo