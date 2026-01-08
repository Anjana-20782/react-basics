//parent component

import { useState } from "react";
import FetchDocument from "./FetchApi";
  
function FetchDataProps(){

    const [userId, setUserId] = useState(1);

    return(
        <div>
            <button onClick={() => setUserId(2)}>Load User</button>

           <FetchDocument id={userId} />
        </div>
    )
}
export default FetchDataProps;