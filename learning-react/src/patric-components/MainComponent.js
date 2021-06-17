import React from "react"

import TextArea from "./text-area.js"
import ImageArea from "./image-area"
function MainComponent(){
    return(
        <section className="welcome">
            <div><TextArea/></div>
            <div><ImageArea/></div>
        
        </section>
    )
}

export default MainComponent
