import React from "react";
import ComponentDidMounted from "./components/Mounted";
import FetchDocument from "./components/FetchApi";


function App(){

  return(

    <div>
      <ComponentDidMounted />
      <FetchDocument />
    </div>
  )
}

export default App;