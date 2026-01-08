import React, { useEffect, useLayoutEffect, useState } from "react";

function MultipleUseEffect(){

    const [state,setState] = useState(null) 

    useEffect(()=>{},[]);
    useEffect(()=>{},[state])

    //uselayoun examaple
    useLayoutEffect(()=>{console.log("Running before paint");
    },[]);

    return(

    <div>
        
    </div>
)
}


export default MultipleUseEffect