import { useEffect,useState } from "react";

function UpdateDocument(){

    const [count,setCount] = useState(null)

        useEffect(()=>{document.title = `Count: ${count}`;},[count]);

        return(
            <div>
                <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>increment</button>
            </div>
        )
}

export default UpdateDocument;