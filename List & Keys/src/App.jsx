import React from "react";
import ListUnique from "./components/ListUnique";
import NestedList from "./components/NestedList";
import ConditionalList from "./components/ConditionalList";
import FilterList from "./components/FilterList";
import SortList from "./components/SortList";
import MapObject from "./components/MapObject";


function App(){

  
  return(

    <div>
      <ListUnique />
      <NestedList />
      <ConditionalList />
      <FilterList />
      <SortList />
      <MapObject />
    </div>
  )
}

export default App;