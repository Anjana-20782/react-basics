import React from "react";
import ListUnique from "./components/ListUnique";
import NestedList from "./components/NestedList";
import ConditionalList from "./components/ConditionalList";
import FilterList from "./components/FilterList";
import SortList from "./components/SortList";
import MapObject from "./components/MapObject";
import NestedComponent from "./components/NestedComponent";
import MemoizedList from "./components/MemoizedList";
import DynamicCssClasses from "./components/DynamicCssClasses";
import ListDelete from "./components/ListDelete";


function App(){

  
  return(

    <div>
      <ListUnique />
      <NestedList />
      <ConditionalList />
      <FilterList />
      <SortList />
      <MapObject />
      <NestedComponent />
      <MemoizedList />
      <DynamicCssClasses />
      <ListDelete />
    </div>
  )
}

export default App;