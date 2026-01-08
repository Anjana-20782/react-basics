import React, { useEffect } from "react";

function ComponentDidMounted(){

    console.log("Mounted");
    useEffect(()=>{console.log("componentdidMount"); }, []);
    useEffect(()=>{
        const timer = setInterval(()=>console.log("tick"),1000);
        return ()=>clearInterval(timer);
    }, []);
    
}

export default ComponentDidMounted;