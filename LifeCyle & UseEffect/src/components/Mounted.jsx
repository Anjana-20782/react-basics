import React, { useEffect } from "react";

function ComponentDidMounted(){

    //componentDidMount example
    console.log("Mounted");

 
    //useeffect equivalent
    useEffect(()=>{console.log("componentdidMount"); }, []);

    //clean with useEffect
    useEffect(()=>{
        const timer = setInterval(()=>console.log("tick"),1000);
        return ()=>clearInterval(timer);
    }, []);


  
    return (
    <div>
      
    </div>
  );

}

export default ComponentDidMounted;