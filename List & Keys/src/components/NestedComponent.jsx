import React from 'react'

const NestedComponent = () => {

     const items = ["Shirt", "Pants", "Dress", "Skirt", "Jacket"];

       const Item = ({ name }) => {
    return <p>{name}</p>;
  };

  return (
    <div style={{color:"blue"}}>
        {items.map((name,index)=>(<Item key={index} name={name} />))}
    </div>
  )
}

export default NestedComponent