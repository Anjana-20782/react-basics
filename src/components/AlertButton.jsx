import React from "react";

function AlertButton(){

    const handleClick = () => alert("Button Clicked")
    return <button onClick={handleClick}>Click me</button>
}

export default AlertButton