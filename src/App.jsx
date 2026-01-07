import React from "react";
import Hello from "./components/Hello"
import Greeting from "./components/Greeting"

function App(){
  return(
    <div>
      <Hello />
      <Greeting name="John" />
        <Greeting name="Alice" />
    </div>
  )
}

export default App