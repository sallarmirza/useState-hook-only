import React, { useState } from "react";

function Temperature(){
    const [input,setInput]=useState('')
    function handleInput(e){
        setInput(e.target.value);

    }
    const [temp,setTemp]=useState('');
    function changeTemp(temp){
        const celsius=parseFloat(input);
        const newTemp=(9/5*celsius)+32;
        setTemp(newTemp.toFixed(2))
    }

    return(<>
    <input type="text" placeholder="Enter Temperature" onChange={handleInput} value={input}/>
    <button onClick={changeTemp}>Temp</button>
    <input type="text" value={temp}  readOnly/>
    </>)
}
export default Temperature;