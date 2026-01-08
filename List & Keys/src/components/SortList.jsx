import React from 'react'

const SortList = () => {

     const items = ["Dalliya", "Jasmine", "Rose", "Sunflower", "Lilly"];

  return (
    <ul style={{color:"red"}}>
        {items.sort((a,b)=>a.localeCompare(b)).map(item=>(<p key={item}>{item}</p>))}
    </ul>
  )
}

export default SortList

