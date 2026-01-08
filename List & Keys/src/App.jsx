import React from "react";
import ListUnique from "./components/ListUnique";
import NestedList from "./components/NestedList";
import ConditionalList from "./components/ConditionalList";
import FilterList from "./components/FilterList";

function App(){

  
  return(

    <div>
      <ListUnique />
      <NestedList />
      <ConditionalList />
      <FilterList />
    </div>
  )
}

export default App;