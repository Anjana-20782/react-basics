import { useEffect,useState } from "react";

function UpdateDocument(){

    //update document title with state

    const [count,setCount] = useState(null)

        useEffect(()=>{document.title = `Count: ${count}`;},[count]);

        //componetDid update eqivalent

        useEffect(()=>{console.log("CountUpdated",count);},[count]);

        //componentWillUnmount example

        useEffect(()=>{
            return () => console.log("CleanUp before Unmount");
        },[]);
        

        return(
            <div>
                <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>increment</button>
            </div>
        )
}

export default UpdateDocument;