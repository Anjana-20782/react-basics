import { useState ,useEffect } from "react";

function FetchDocument(){

    const [data,setData]= useState(null)

     useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(setData)
          .catch(console.error);
      }, []);
    
    return(
        <div>
              <h2>Component Mounted Example</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )

}

export default FetchDocument;