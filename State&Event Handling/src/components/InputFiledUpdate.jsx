import React, { useState } from "react";

function InputDemo(){

    const[text,setText] = useState("")

    return(
        <>

        <input onChange={e => setText(e.target.value)} />
        <p>{text}</p>

        </>
    );
};

export default InputDemo;