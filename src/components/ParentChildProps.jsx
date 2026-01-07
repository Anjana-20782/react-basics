import React from "react";

function Parent(){

    const name = "Anjana";
    return <Child name={name} />;
}

function Child({name}){
    return <p>Hello {name}</p>;
}

export default Parent;