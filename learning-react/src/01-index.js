// import React from "react"
import ReactDOM from "react-dom"

import ContactCard from './components/01-contact-card'

function Display(){
  return(
    <div>
      <ContactCard
      contact={{
          name:"Manita Dahal",
          email:"manudahal2@gmail.com",
          number:"987"
        }}
      />
      <ContactCard
      contact={{
      name:"Jenisha Dahal",
      email:"jennydahal2@gmail.com",
      number:"9878"
      }}
      />
      <ContactCard
      contact={{
      name:"MUkunda Dahal",
      email:"mukudahal2@gmail.com",
      number:"987887"
      }}
      />

    </div>
  )
}

ReactDOM.render(
  <Display/>,
  document.getElementById("root")
)