import React, { useState } from "react";

function Button(){
    const [state,setState]=useState(false);
    function handleState(){
        setState(!state)
    }
return(
    <div>
        <button onClick={handleState}>{state ? "On":"Off"}</button>

    </div>
)
}
export default Button;