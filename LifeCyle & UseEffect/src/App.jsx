import React from "react";
import ComponentDidMounted from "./components/Mounted";
import FetchDocument from "./components/FetchApi";
import UpdateDocument from "./components/UpdateDocument";
import FetchDataProps from "./components/FetchDataProps";
import MultipleUseEffect from "./components/MultipleUseEffect";


function App(){

  return(

    <div>
      <ComponentDidMounted />
      <FetchDocument />
      <UpdateDocument />
      <FetchDataProps />
      <MultipleUseEffect />
    </div>
  )
}

export default App;