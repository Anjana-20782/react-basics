import React from "react";
import ComponentDidMounted from "./components/Mounted";
import FetchDocument from "./components/FetchApi";
import UpdateDocument from "./components/UpdateDocument";


function App(){

  return(

    <div>
      <ComponentDidMounted />
      <FetchDocument />
      <UpdateDocument />
    </div>
  )
}

export default App;