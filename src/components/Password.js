import React, { useState } from "react";

function Password(){
    const [password,setPassword]=useState('');
    function handlePassword(e){
        setPassword(e.target.value)
    }
    const [show,setShow]=useState(false);
    function showPassword(){
        setShow(!show);
    }
return (
    <>
    <input placeholder="Enter Password"  type={show ? "text":"password"} value={password} onChange={handlePassword}/>
    <button onClick={showPassword}>{show ? "Hide Password" : "Show Password"}</button>
    </>
)
}
export default Password;