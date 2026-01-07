import React from "react";
import Counter from "./components/Counter";
import InputDemo from "./components/InputFiledUpdate";
import ToggleDiv from "./components/ToggleVisibility";

function App(){

    return(

        <div>
            <Counter /><br /><br />
            <InputDemo />
            <ToggleDiv />
        </div>
    )
}

export default App;