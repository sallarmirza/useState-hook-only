import React, { useState } from "react";

function WordCounter(){
    const [word,setWord]=useState(0);
    function CountWord(e){
        setWord(e.target.value.length);
    }
return (
    <><input type="text" onChange={CountWord}/>
    <p>{word}</p></>
)
}
export default WordCounter;