import React from "react";
import Counter from "./components/Counter";
import InputDemo from "./components/InputFiledUpdate";
import ToggleDiv from "./components/ToggleVisibility";
import List from "./components/EventHnadler";
import LoginForm from "./components/FrmWithControlledInpuut";
import MultiplInputForm from "./components/multControInputOneHandler";
import CheckBoxDemo from "./components/CheckBox";


function App() {
  const colors = ["Red", "Green", "Blue"];

  return (
    <div>
      <Counter /><br /><br />
      <InputDemo />
      <ToggleDiv /><br></br>
      <List items={colors} /><br /><br />
      <LoginForm /><br /><br />
      <MultiplInputForm />
      <CheckBoxDemo />
     
    </div>
  );
}

export default App;
