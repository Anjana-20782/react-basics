import React from "react";
import Hello from "./components/Hello"
import Greeting from "./components/Greeting"
import FruitsList from "./components/FruitsList";
import User from "./components/Logged";
import AlertButton from "./assets/AlertButton";

function App(){
  return(
    <div>
      <Hello />
      <Greeting name="John" />
        <Greeting name="Alice" />
        <FruitsList />
        <User />
        <AlertButton />
    </div>
  )
}

export default App