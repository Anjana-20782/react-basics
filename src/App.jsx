import React from "react";
import Hello from "./components/Hello"
import Greeting from "./components/Greeting"
import FruitsList from "./components/FruitsList";
import User from "./components/Logged";
import AlertButton from "./components/AlertButton";
import Clock from "./components/DateTimeUsingState";
import Parent from "./components/ParentChildProps";
import UserList from "./components/ArrayOfObject";

function App(){
  return(
    <div>
      <Hello />
      <Greeting name="John" />
        <Greeting name="Alice" />
        <FruitsList />
        <User />
        <AlertButton />
         <Clock />
         <Parent />
         <UserList />
    </div>
  )
}

export default App