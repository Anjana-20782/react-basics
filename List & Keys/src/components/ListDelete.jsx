import React, { useState } from 'react'

const ListDelete = () => {

   const[items,setItems]=useState(["A","B"])
   const remove=i=>setItems(items.filter(x=>x!==i)); 
  return (
    <div>
        {items.map(i=><li key={i}>{i}<button onClick={()=>remove(i)}>Delete</button></li>)}
    </div>
  )
}

export default ListDelete