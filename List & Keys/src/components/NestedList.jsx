import React from "react";

function NestedList(){

    const categories = [
        {
      id: 1,
      name: "Fruits",
      items: ["Apple", "Banana", "Orange"]
    },
    {
      id: 2,
      name: "Vegetables",
      items: ["Carrot", "Potato", "Tomato"]
    }
    ]

    return(

       categories.map(c=>(
        <div style={{color:"green"}} key={c.id}>
            <h2>{c.name}</h2>
            <ul>
                {c.items.map(i=><li key={i}>{i}</li>)}</ul>
        </div>
       ))
    )
}

export default NestedList;