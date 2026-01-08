import React from "react";
import ComponentDidMounted from "./components/Mounted";
import FetchDocument from "./components/FetchApi";
import UpdateDocument from "./components/UpdateDocument";
import FetchDataProps from "./components/FetchDataProps";


function App(){

  return(

    <div>
      <ComponentDidMounted />
      <FetchDocument />
      <UpdateDocument />
      <FetchDataProps />
    </div>
  )
}

export default App;