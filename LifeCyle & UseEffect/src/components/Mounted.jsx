import React, { useEffect } from "react";

function ComponentDidMounted(){

    console.log("Mounted");
    useEffect(()=>{console.log("componentdidMount"); }, []);
    
}

export default ComponentDidMounted;