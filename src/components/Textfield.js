import React, { useState } from "react";

function Textfield(){
    const [input,setInput]=useState('')
    function handleInput(e){
        setInput(e.target.value);

    }
return (<>
<input type="text" onChange={handleInput} placeholder="Enter text"/>
<p> Your Text: {input}</p>
</>)
}
export default Textfield;